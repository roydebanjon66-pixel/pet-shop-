// shop.js — Shop page filter + render logic
document.addEventListener('DOMContentLoaded', () => {
  let activeCat = 'all';
  let maxPrice = 15000;
  let sortMode = 'default';

  // Read URL param for initial category
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('cat');
  if (urlCat) {
    activeCat = urlCat;
    document.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.cat === urlCat);
    });
  }

  function getFiltered() {
    let list = PRODUCTS.filter(p => {
      if (activeCat !== 'all' && p.category !== activeCat) return false;
      if (p.price > maxPrice) return false;
      return true;
    });
    if (sortMode === 'price-asc') list.sort((a,b) => a.price - b.price);
    else if (sortMode === 'price-desc') list.sort((a,b) => b.price - a.price);
    else if (sortMode === 'rating') list.sort((a,b) => b.rating - a.rating);
    return list;
  }

  function renderCard(p) {
    return `
    <a href="product.html?id=${p.id}" class="card product-card" style="text-decoration:none;color:inherit">
      <div class="product-img-wrap">
        ${p.hasImage
          ? `<img src="${p.image}" alt="${p.name}" loading="lazy"/>`
          : `<div class="product-img-placeholder" style="background:${p.gradient}">${p.icon}</div>`}
        ${p.badge ? `<span class="product-badge" style="background:${p.badgeColor}">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <div class="product-cat">${p.categoryLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-now">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
        <button class="add-cart-btn" onclick="event.preventDefault();addToCart(${p.id})">🛒 Add to Cart</button>
      </div>
    </a>`;
  }

  function render() {
    const grid = document.getElementById('all-products-grid');
    const count = document.getElementById('product-count');
    const filtered = getFiltered();
    count.textContent = filtered.length;
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="no-results"><div class="no-icon">🐾</div><h3>No products found</h3><p>Try adjusting your filters.</p></div>`;
    } else {
      grid.innerHTML = filtered.map(renderCard).join('');
    }
  }

  // Category pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCat = pill.dataset.cat;
      render();
    });
  });

  // Price range
  const priceRange = document.getElementById('price-range');
  const priceVal = document.getElementById('price-val');
  priceRange.addEventListener('input', () => {
    maxPrice = parseInt(priceRange.value);
    priceVal.textContent = maxPrice.toLocaleString('en-IN');
    render();
  });

  // Sort
  document.getElementById('sort-select').addEventListener('change', (e) => {
    sortMode = e.target.value;
    render();
  });

  // Reset
  document.getElementById('reset-btn').addEventListener('click', () => {
    activeCat = 'all';
    maxPrice = 15000;
    sortMode = 'default';
    priceRange.value = 15000;
    priceVal.textContent = '15,000';
    document.getElementById('sort-select').value = 'default';
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === 'all'));
    render();
  });

  render();
});
