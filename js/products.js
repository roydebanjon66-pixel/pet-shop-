// ============================================================
// PawsHome — Shared Product Data (BDT pricing)
// ============================================================

const CURRENCY = '৳';
function formatPrice(amount) {
  return CURRENCY + amount.toLocaleString('en-IN');
}

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Nutrition Dog Food",
    category: "dogs",
    categoryLabel: "Dogs",
    price: 2750,
    oldPrice: 3850,
    rating: 4.8,
    reviews: 312,
    badge: "Best Seller",
    badgeColor: "#5B8DEF",
    emoji: "🦴",
    gradient: "linear-gradient(135deg, #5B8DEF22, #4ECDC422)",
    icon: "🐶",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&h=300&fit=crop&auto=format",
    hasImage: true,
    description: "Vet-recommended formula packed with real chicken, wholesome grains and essential vitamins. Supports strong bones, a shiny coat and healthy digestion for dogs of all sizes.",
    features: ["Real chicken as #1 ingredient", "No artificial colours or flavours", "Supports joint health", "Rich in Omega-3 & Omega-6"],
    inStock: true,
    weight: "5 kg",
    brand: "PawsNutrition"
  },
  {
    id: 2,
    name: "Adjustable Dog Collar & Leash Set",
    category: "dogs",
    categoryLabel: "Dogs",
    price: 2090,
    oldPrice: 2860,
    rating: 4.7,
    reviews: 198,
    badge: "Popular",
    badgeColor: "#FF6B9D",
    emoji: "🎀",
    gradient: "linear-gradient(135deg, #FF6B9D22, #5B8DEF22)",
    icon: "🐕",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=300&fit=crop&auto=format",
    hasImage: true,
    description: "Durable nylon collar and matching leash with quick-release buckle. Reflective stitching for night-time safety. Adjustable fit for all breeds.",
    features: ["Heavy-duty nylon strap", "Reflective night stitching", "Quick-release buckle", "Adjustable 30–55 cm"],
    inStock: true,
    weight: "N/A",
    brand: "PawsGear"
  },
  {
    id: 3,
    name: "Interactive Puzzle Dog Toy",
    category: "dogs",
    categoryLabel: "Dogs",
    price: 1430,
    oldPrice: null,
    rating: 4.9,
    reviews: 445,
    badge: "Top Rated",
    badgeColor: "#4ECDC4",
    emoji: "🧩",
    gradient: "linear-gradient(135deg, #4ECDC422, #A8E6CF22)",
    icon: "🎾",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=300&fit=crop&auto=format",
    hasImage: true,
    description: "Keep your dog mentally stimulated with this 3-level puzzle toy. Hide treats inside and watch your pup solve the challenge. Made from non-toxic BPA-free plastic.",
    features: ["3 difficulty levels", "BPA-free safe plastic", "Dishwasher safe", "Suitable for all breeds"],
    inStock: true,
    weight: "350 g",
    brand: "PawsPlay"
  },
  {
    id: 4,
    name: "Luxury Cat Tree Tower",
    category: "cats",
    categoryLabel: "Cats",
    price: 9900,
    oldPrice: 13200,
    rating: 4.6,
    reviews: 221,
    badge: "Sale",
    badgeColor: "#F7971E",
    emoji: "🏰",
    gradient: "linear-gradient(135deg, #F7971E22, #FFD20022)",
    icon: "😺",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500&h=300&fit=crop&auto=format",
    hasImage: true,
    description: "A 5-tier climbing paradise for your cat. Features scratching posts, cozy hammock beds, dangling toys and a top perch. Solid sisal rope throughout.",
    features: ["5 activity platforms", "Sisal scratching posts", "Built-in hammock bed", "Easy self-assembly"],
    inStock: true,
    weight: "8 kg",
    brand: "CatKingdom"
  },
  {
    id: 5,
    name: "Gourmet Cat Food — Salmon",
    category: "cats",
    categoryLabel: "Cats",
    price: 2200,
    oldPrice: 2750,
    rating: 4.8,
    reviews: 388,
    badge: "Best Seller",
    badgeColor: "#5B8DEF",
    emoji: "🐟",
    gradient: "linear-gradient(135deg, #5B8DEF22, #FF6B9D22)",
    icon: "🐱",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=300&fit=crop&auto=format",
    hasImage: true,
    description: "Ocean-fresh salmon in a rich gravy sauce. 100% complete & balanced nutrition for adult cats. Grain-free recipe that supports urinary health.",
    features: ["Ocean-fresh salmon", "Grain-free recipe", "Urinary health support", "No artificial preservatives"],
    inStock: true,
    weight: "2 kg",
    brand: "CatGourmet"
  },
  {
    id: 6,
    name: "Sisal Cat Scratching Post",
    category: "cats",
    categoryLabel: "Cats",
    price: 3850,
    oldPrice: null,
    rating: 4.5,
    reviews: 167,
    badge: null,
    badgeColor: null,
    emoji: "🪵",
    gradient: "linear-gradient(135deg, #A8E6CF22, #4ECDC422)",
    icon: "🐾",
    image: "https://images.unsplash.com/photo-1513360371489-6b7a904db7f4?w=500&h=300&fit=crop&auto=format",
    hasImage: true,
    description: "Tall sisal rope scratching post with a weighted base to prevent tipping. Saves your furniture while keeping your cat's claws healthy and trimmed.",
    features: ["60 cm tall design", "Heavy weighted base", "Natural sisal rope", "Protects furniture"],
    inStock: true,
    weight: "2.5 kg",
    brand: "CatKingdom"
  },
  {
    id: 7,
    name: "Deluxe Bird Cage with Stand",
    category: "birds",
    categoryLabel: "Birds",
    price: 7150,
    oldPrice: 9350,
    rating: 4.7,
    reviews: 134,
    badge: "New",
    badgeColor: "#4ECDC4",
    emoji: "🏡",
    gradient: "linear-gradient(135deg, #4ECDC422, #A8E6CF44)",
    icon: "🦜",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&h=300&fit=crop&auto=format",
    hasImage: true,
    description: "Spacious wrought iron cage with pull-out tray for easy cleaning. Includes perches, food & water cups, and a swing toy. Freestanding on an elegant stand.",
    features: ["Pull-out cleaning tray", "2 feeding cups included", "Lockable doors", "Freestanding stand"],
    inStock: true,
    weight: "6 kg",
    brand: "BirdHaven"
  },
  {
    id: 8,
    name: "Tropical Bird Seed Mix",
    category: "birds",
    categoryLabel: "Birds",
    price: 1650,
    oldPrice: null,
    rating: 4.8,
    reviews: 209,
    badge: "Popular",
    badgeColor: "#FF6B9D",
    emoji: "🌾",
    gradient: "linear-gradient(135deg, #FFD20022, #F7971E22)",
    icon: "🐦",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&h=300&fit=crop&auto=format",
    hasImage: true,
    description: "A premium blend of 12 seeds, grains, fruits and nuts loved by parrots, cockatiels and finches. No artificial additives. Packed fresh to retain nutrients.",
    features: ["12-seed premium blend", "Sun-dried fruits & nuts", "No artificial additives", "Resealable bag"],
    inStock: true,
    weight: "1 kg",
    brand: "BirdHaven"
  },
  {
    id: 9,
    name: "Aquarium Starter Kit 60L",
    category: "fish",
    categoryLabel: "Fish",
    price: 8800,
    oldPrice: 12100,
    rating: 4.6,
    reviews: 176,
    badge: "Sale",
    badgeColor: "#F7971E",
    emoji: "🐠",
    gradient: "linear-gradient(135deg, #5B8DEF33, #4ECDC433)",
    icon: "🐟",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&h=300&fit=crop&auto=format",
    hasImage: true,
    description: "Everything you need to start your aquarium journey. Includes a 60-litre tank, LED lighting, internal filter, heater, thermometer and a substrate bag.",
    features: ["60-litre clear tank", "LED colour lighting", "Quiet internal filter", "Digital thermometer"],
    inStock: true,
    weight: "12 kg",
    brand: "AquaWorld"
  },
  {
    id: 10,
    name: "Premium Tropical Fish Food",
    category: "fish",
    categoryLabel: "Fish",
    price: 1100,
    oldPrice: null,
    rating: 4.7,
    reviews: 298,
    badge: "Best Seller",
    badgeColor: "#5B8DEF",
    emoji: "🥣",
    gradient: "linear-gradient(135deg, #4ECDC422, #5B8DEF22)",
    icon: "🦈",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500&h=300&fit=crop&auto=format",
    hasImage: true,
    description: "High-protein micro pellets specially formulated for tropical fish. Enhances natural colour, boosts immunity and keeps tank water clean. Won't cloud water.",
    features: ["Micro-pellet formula", "Colour-enhancing nutrients", "Immune system support", "Won't cloud water"],
    inStock: true,
    weight: "200 g",
    brand: "AquaWorld"
  }
];

// ── Cart ──
const CART_KEY = "pawshome_cart";
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart(cart) { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
function addToCart(productId, qty = 1) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === productId);
  if (idx > -1) { cart[idx].qty += qty; } else { cart.push({ id: productId, qty }); }
  saveCart(cart);
  updateCartBadge();
  showCartToast();
}
function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll(".cart-badge").forEach(b => {
    b.textContent = total;
    b.style.display = total > 0 ? "flex" : "none";
  });
}
function showCartToast() {
  const t = document.getElementById("cart-toast");
  if (!t) return;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = "";
  for (let i = 0; i < full; i++) s += "★";
  if (half) s += "½";
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) s += "☆";
  return s;
}
document.addEventListener("DOMContentLoaded", updateCartBadge);
