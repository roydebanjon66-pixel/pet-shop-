// product.js — Dynamic product detail page
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = PRODUCTS.find(p => p.id === id);
  const wrap = document.getElementById('product-detail-wrap');

  if (!product) {
    wrap.innerHTML = `<div class="not-found"><div style="font-size:4rem">😿</div><h1>Product Not Found</h1><p>We couldn't find this product. Browse our shop instead.</p><a href="shop.html" class="btn btn-primary" style="margin-top:24px;display:inline-flex">← Back to Shop</a></div>`;
    return;
  }

  document.getElementById('page-title').textContent = `${product.name} — PawsHome`;
  document.getElementById('bc-name').textContent = product.name;

  const savings = product.oldPrice ? product.oldPrice - product.price : 0;

  wrap.innerHTML = `
  <div class="product-detail">
    <div class="product-gallery">
      <div class="gallery-main" style="${!product.hasImage ? 'background:'+product.gradient : ''}">
        ${product.hasImage ? `<img src="${product.image}" alt="${product.name}" loading="lazy"/>` : product.icon}
      </div>
    </div>
    <div class="product-info">
      <div class="product-cat">${product.categoryLabel}</div>
      <h1>${product.name}</h1>
      <div class="info-rating">
        <span class="info-stars">${renderStars(product.rating)}</span>
        <span>${product.rating} (${product.reviews} reviews)</span>
        ${product.badge ? `<span style="background:${product.badgeColor};color:#fff;font-size:.72rem;font-weight:700;padding:4px 12px;border-radius:50px">${product.badge}</span>` : ''}
      </div>
      <div class="info-price">
        <span class="info-price-now">${formatPrice(product.price)}</span>
        ${product.oldPrice ? `<span class="info-price-old">${formatPrice(product.oldPrice)}</span><span class="info-badge">Save ${formatPrice(savings)}</span>` : ''}
      </div>
      <p class="info-desc">${product.description}</p>
      <ul class="info-features">
        ${product.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="info-meta">
        <div class="meta-item"><span>Brand</span><strong>${product.brand}</strong></div>
        <div class="meta-item"><span>Weight</span><strong>${product.weight}</strong></div>
        <div class="meta-item"><span>Category</span><strong>${product.categoryLabel}</strong></div>
        <div class="meta-item"><span>Stock</span><strong style="color:var(--teal)">${product.inStock ? '✓ In Stock' : '✗ Out of Stock'}</strong></div>
      </div>
      <div class="qty-row">
        <span class="qty-label">Quantity:</span>
        <div class="qty-ctrl">
          <button onclick="changeQty(-1)">−</button>
          <input type="number" id="qty-input" value="1" min="1" max="99" readonly/>
          <button onclick="changeQty(1)">+</button>
        </div>
      </div>
      <div class="action-row">
        <button class="add-detail-btn" onclick="handleAddToCart()">🛒 Add to Cart</button>
        <button class="wish-btn" title="Wishlist" id="wish-btn" onclick="toggleWish(this)">🤍</button>
      </div>
    </div>
  </div>`;

  // Related products
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  if (related.length > 0) {
    const relSection = document.getElementById('related-section');
    const relGrid = document.getElementById('related-grid');
    relSection.style.display = 'block';
    relGrid.innerHTML = related.map(p => `
    <a href="product.html?id=${p.id}" class="card product-card" style="text-decoration:none;color:inherit">
      <div class="product-img-wrap">
        ${p.hasImage ? `<img src="${p.image}" alt="${p.name}" loading="lazy"/>` : `<div class="product-img-placeholder" style="background:${p.gradient}">${p.icon}</div>`}
        ${p.badge ? `<span class="product-badge" style="background:${p.badgeColor}">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <div class="product-cat">${p.categoryLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating"><span class="stars">${renderStars(p.rating)}</span><span class="rating-count">(${p.reviews})</span></div>
        <div class="product-price">
          <span class="price-now">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
        <button class="add-cart-btn" onclick="event.preventDefault();addToCart(${p.id})">🛒 Add to Cart</button>
      </div>
    </a>`).join('');
  }
});

function changeQty(delta) {
  const input = document.getElementById('qty-input');
  if (!input) return;
  input.value = Math.max(1, Math.min(99, parseInt(input.value) + delta));
}
function handleAddToCart() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const qty = parseInt(document.getElementById('qty-input').value) || 1;
  addToCart(id, qty);
}
function toggleWish(btn) {
  btn.textContent = btn.textContent === '❤️' ? '🤍' : '❤️';
}
