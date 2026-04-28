// ============================================================
// PRODUCT DATA
// ============================================================
const products = [
    {
        id: 1,
        category: 'plant',
        badge: 'Best Seller',
        badgeClass: '',
        name: 'Dhakki Special Date Palm Offshoot',
        shortName: 'Kanjor Plant',
        desc: 'Healthy Dates Palm  from sucker plant to 1-year-old Kanjor (Dhakki Special (Thulla)) date palm offshoots, ready for transplanting. Comes with roots intact and care guide.',
        longDesc: 'Our Kanjor Date Palm offshoots are sourced from mature, high-yield mother plants on our farm. Each offshoot is 8-12 months old with a healthy root system. These are genuine Kanjor (Dhakki Special (Thulla)) known for its golden-yellow dates with rich sweetness. Ideal for farm plantations, home gardens, and commercial date orchards. Comes with a care guide and follow-up WhatsApp support.',
        price: 4500,
        unit: 'per plant',
        rating: 4.9,
        reviews: 142,
        img: 'images/Date_C1.jpg',
    },
    {
        id: 2,
        category: 'plant',
        badge: 'Best Seller',
        badgeClass: '',
        name: 'Dhakki Special Date Palm Offshoot',
        shortName: 'Kanjor Plant',
        desc: 'Healthy Dates Palm  from 1 to 3-year-old Kanjor (Dhakki Special (Thulla)) date palm offshoots, ready for transplanting. Comes with roots intact and care guide.',
        longDesc: 'Our Kanjor Date Palm offshoots are sourced from mature, high-yield mother plants on our farm. Each offshoot is 1 to 3 years old with a healthy root system. These are genuine Kanjor (Dhakki Special (Thulla)) variety known for its golden-yellow dates with rich sweetness. Ideal for farm plantations, home gardens, and commercial date orchards. Comes with a care guide and follow-up WhatsApp support.',
        price: 4500,
        unit: 'per plant',
        rating: 4.9,
        reviews: 142,
        img: 'images/Date_C2.jpg',
    },
    {
        id: 3,
        category: 'plant',
        badge: 'Best Seller',
        badgeClass: '',
        name: 'Dhakki Special Date Palm Offshoot',
        shortName: 'Kanjor Plant',
        desc: 'Healthy Dates Palm  from 3 to 5-year-old Kanjor (Dhakki Special (Thulla)) date palm offshoots, ready for transplanting. Comes with roots intact and care guide.',
        longDesc: 'Our Kanjor Date Palm offshoots are sourced from mature, high-yield mother plants on our farm. Each offshoot is 3 to 4 years old with a healthy root system. These are genuine Kanjor (Dhakki Special (Thulla)) variety known for its golden-yellow dates with rich sweetness. Ideal for farm plantations, home gardens, and commercial date orchards. Comes with a care guide and follow-up WhatsApp support.',
        price: 4500,
        unit: 'per plant',
        rating: 4.9,
        reviews: 142,
        img: 'images/Date_C3.jpg',
    },
    {
        id: 5,
        category: 'plant',
        badge: 'Rare',
        badgeClass: 'organic',
        name: 'Shakri Kanjor Plant',
        shortName: 'Basra Kanjor Plant',
        desc: 'It is an other verity of Dhakki Dates Plant and its name is "Shakri", which is known for its red dates with rich sweetness ',
        longDesc: 'It is an other verity of Dhakki Dates Plant and its name is "Shakri", which is known for its red dates with rich sweetness. All plants are produced under controlled laboratory conditions ensuring 100% authenticity of variety. They are smaller than offshoots but grow faster and produce consistent yields. Recommended for commercial farmers and serious plantation projects. Minimum order: 10 plants.',
        price: 3200,
        unit: 'per plant',
        rating: 4.8,
        reviews: 34,
        img: 'images/Shakri.jpeg',
    },
    {
        id: 4,
        category: 'plant',
        badge: 'Rare',
        badgeClass: 'organic',
        name: 'Basra Kanjor Plant',
        shortName: 'Basra Kanjor Plant',
        desc: 'It is an other verity of Dhakki Dates Plant and its name is "Basra", which is known for its golden-yellow dates with rich sweetness ',
        longDesc: 'It is an other verity of Dhakki Dates Plant and its name is "Basra", which is known for its golden-yellow dates with rich sweetness. All plants are produced under controlled laboratory conditions ensuring 100% authenticity of variety. They are smaller than offshoots but grow faster and produce consistent yields. Recommended for commercial farmers and serious plantation projects. Minimum order: 10 plants.',
        price: 3200,
        unit: 'per plant',
        rating: 4.8,
        reviews: 34,
        img: 'images/Tosha_Basra.jpeg',
    },
    {
        id: 6,
        category: 'fresh',
        badge: 'Organic',
        badgeClass: 'organic',
        name: 'Fresh Dhakki Special Kanjor',
        shortName: 'Fresh Kanjor',
        desc: 'Sun-ripened fresh Kanjor dates harvested at peak sweetness. Soft, juicy, and full of natural flavour — straight from the farm.',
        longDesc: 'Our Fresh Kanjor dates are harvested at the peak of ripeness during the season. These golden-yellow are dried in sun light and turned in to redish color of special dates which have a soft, moist texture with a rich caramel-like sweetness. Free from any preservatives, artificial colours, or chemicals. Sold per kilogram in fresh condition. Best consumed within 2 weeks. Available in retail (1kg) and bulk (5kg, 10kg) packaging.',
        price: 1100,
        unit: 'per kg',
        rating: 4.8,
        reviews: 318,
        img: 'images/Date_C6.jpg"',
    },
    {
        id: 7,
        category: 'dry',
        badge: 'Premium',
        badgeClass: '',
        name: 'Sun-Dried Chawara (Premium)',
        shortName: 'Premium Chawara',
        desc: 'Premium quality Chawara (dry dates) naturally sun-dried on the farm. Rich in nutrients, perfect for everyday use with or without milk its your choice and gifting.',
        longDesc: 'Our Premium Chawara are naturally sun-dried Kanjor dates with no added sugar or preservatives. The drying process concentrates their natural sweetness and nutrients. These are ideal for daily consumption, cooking, Ramadan, and gifting. Available in beautifully presented gift boxes and bulk export packaging. Shelf life: 6–12 months in a cool dry place.',
        price: 1100,
        unit: 'per kg',
        rating: 5.0,
        reviews: 204,
        img: 'images/Date_C7.jpg',
    },
    {
        id: 8,
        category: 'dry',
        badge: 'Export Quality',
        badgeClass: '',
        name: 'Chawara & Kanjor Gift Box (500g)',
        shortName: 'Chawara Gift Box',
        desc: 'Elegantly packaged Chawara & Kanjor gift box, perfect for Eid, weddings, and corporate gifting. Premium quality in a beautiful presentation.',
        longDesc: 'A luxurious gift box containing 500g of our finest Premium Chawara & Kanjor. The box is beautifully designed with traditional patterns and can be customised with a message card. Perfect for Eid gifts, wedding favours, corporate hampers, and special occasions. Custom branding and bulk gift orders also available.',
        price: 600,
        unit: 'per box',
        rating: 4.9,
        reviews: 88,
        img: 'https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=600&auto=format&fit=crop',
    },
    
];

// ============================================================
// CART STATE
// ============================================================
let cart = [];

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartUI() {
    const count = cart.reduce((sum, i) => sum + i.qty, 0);
    document.getElementById('cartCount').textContent = count;

    const itemsEl = document.getElementById('cartItems');
    const footerEl = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');

    if (cart.length === 0) {
        itemsEl.innerHTML = `<div class="cart-empty"><i class="fa-solid fa-bag-shopping"></i><p>Your cart is empty</p></div>`;
        footerEl.style.display = 'none';
        return;
    }

    footerEl.style.display = 'block';
    totalEl.textContent = 'Rs. ' + getCartTotal().toLocaleString();

    itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"/></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  `).join('');
}

function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(i => i.id === productId);
    if (existing) { existing.qty += qty; }
    else { cart.push({ ...product, qty }); }
    updateCartUI();
    showToast(`${product.shortName} added to cart!`);
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(productId);
    else updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function checkoutWhatsApp() {
    if (cart.length === 0) return;
    let msg = 'Assalamu Alaikum! I want to order dates from Malik Dhakki Dates Nursery":\n\n';
    cart.forEach(item => {
        msg += `• ${item.name} x${item.qty} = Rs. ${(item.price * item.qty).toLocaleString()}\n`;
    });
    msg += `\nTotal: Rs. ${getCartTotal().toLocaleString()}\n\nPlease confirm availability.`;
    window.open('https://wa.me/923469892120?text=' + encodeURIComponent(msg), '_blank');
}


// ============================================================
// PRODUCTS RENDERING
// ============================================================
let currentFilter = 'all';

function renderProducts(filter = 'all') {
    currentFilter = filter;
    const grid = document.getElementById('productsGrid');
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card reveal delay-${i % 4}" style="transition-delay:${(i % 4) * 0.1}s">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        <span class="product-badge ${p.badgeClass}">${p.badge}</span>
        <button class="product-wishlist" onclick="event.stopPropagation(); showToast('Added to wishlist!')">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
      <div class="product-info" onclick="openModal(${p.id})" style="cursor:pointer;">
        <span class="product-category">${p.category === 'plant' ? 'Date Plant' : p.category === 'fresh' ? 'Fresh Dates' : 'Dry Dates'}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc.substring(0, 90)}…</p>
        <div class="product-rating">
          <div class="stars">${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '<i class="fa-solid fa-star-half-stroke"></i>' : ''}</div>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
      </div>
      <div class="product-footer" style="padding:0 22px 22px;">
        <div class="product-price">
          <span class="price-main">Rs. ${p.price.toLocaleString()}</span>
          <span class="price-unit">${p.unit}</span>
        </div>
        <button class="add-cart-btn" onclick="addToCart(${p.id})">
          <i class="fa-solid fa-plus"></i> Add
        </button>
      </div>
    </div>
  `).join('');

    // Re-trigger reveal for new cards
    setTimeout(() => {
        grid.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
            el.classList.add('active');
        });
    }, 50);
}

function filterProducts(filter, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(filter);
}

// ============================================================
// MODAL
// ============================================================
let modalQty = 1;
let modalProduct = null;

function openModal(productId) {
    modalProduct = products.find(p => p.id === productId);
    modalQty = 1;
    if (!modalProduct) return;

    document.getElementById('modalImg').innerHTML = `<img src="${modalProduct.img}" alt="${modalProduct.name}"/>`;
    document.getElementById('modalInfo').innerHTML = `
    <button class="modal-close" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
    <div class="modal-cat">${modalProduct.category === 'plant' ? 'Date Plant' : modalProduct.category === 'fresh' ? 'Fresh Dates' : 'Dry Dates'}</div>
    <h2 class="modal-name">${modalProduct.name}</h2>
    <div class="modal-rating">
      <div class="stars">${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(modalProduct.rating))}${modalProduct.rating % 1 >= 0.5 ? '<i class="fa-solid fa-star-half-stroke"></i>' : ''}</div>
      <span style="font-size:0.85rem;color:var(--text-light);margin-left:6px;">${modalProduct.rating} (${modalProduct.reviews} reviews)</span>
    </div>
    <div class="modal-price">Rs. ${modalProduct.price.toLocaleString()} <span style="font-size:1rem;color:var(--text-light);font-family:'Outfit',sans-serif;font-weight:400;">${modalProduct.unit}</span></div>
    <p class="modal-desc">${modalProduct.longDesc}</p>
    <div class="modal-qty-section">
      <span class="modal-qty-label">Quantity:</span>
      <div class="modal-qty-ctrl">
        <button class="qty-btn" onclick="changeModalQty(-1)"><i class="fa-solid fa-minus"></i></button>
        <span class="modal-qty-num qty-num" id="modalQtyDisplay">1</span>
        <button class="qty-btn" onclick="changeModalQty(1)"><i class="fa-solid fa-plus"></i></button>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn-primary modal-add-cart" onclick="addToCart(${modalProduct.id}, modalQty); closeModal()">
        <i class="fa-solid fa-bag-shopping"></i> Add to Cart
      </button>
      <a href="https://wa.me/923469892120?text=${encodeURIComponent('Assalamu Alaikum! I want to order: ' + modalProduct.name + ' x1. Please confirm price and availability.')}" target="_blank" class="btn-whatsapp modal-wa-btn">
        <i class="fa-brands fa-whatsapp"></i> Order via WhatsApp
      </a>
    </div>
  `;

    document.getElementById('productModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function changeModalQty(delta) {
    modalQty = Math.max(1, modalQty + delta);
    const el = document.getElementById('modalQtyDisplay');
    if (el) el.textContent = modalQty;
}

function closeModal(event) {
    if (event && event.target !== document.getElementById('productModal')) return;
    document.getElementById('productModal').classList.remove('open');
    document.body.style.overflow = '';
}

// ============================================================
// NAVBAR SCROLL
// ============================================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// ============================================================
// MOBILE NAV
// ============================================================
function toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileNavOverlay');
    nav.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}

// ============================================================
// SCROLL REVEAL
// ============================================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function initReveal() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el);
    });
}

// ============================================================
// TOAST
// ============================================================
let toastTimer;
function showToast(msg) {
    clearTimeout(toastTimer);
    document.getElementById('toastMsg').textContent = msg;
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
// FORM SUBMIT
// ============================================================
function submitForm() {
    const name = document.getElementById('fName').value.trim();
    const phone = document.getElementById('fPhone').value.trim();
    const msg = document.getElementById('fMsg').value.trim();
    if (!name || !phone || !msg) { showToast('Please fill in required fields.'); return; }
    const waMsg = `Hello Al-Nakheel Farms!\n\nName: ${name}\nPhone: ${phone}\nMessage: ${msg}`;
    window.open('https://wa.me/923469892120?text=' + encodeURIComponent(waMsg), '_blank');
    showToast('Message sent via WhatsApp!');
}

// ============================================================
// NEWSLETTER
// ============================================================
function subscribeNewsletter() {
    const email = document.getElementById('nlEmail').value.trim();
    if (!email || !email.includes('@')) { showToast('Please enter a valid email.'); return; }
    showToast('Subscribed successfully! Thank you.');
    document.getElementById('nlEmail').value = '';
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initReveal();
});

/* ============================================================
   ACTIVE CSS
============================================================ */

document.addEventListener("DOMContentLoaded", function () {
    // Current page ka URL lena
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Link ki href attribute nikalna
        const linkHref = link.getAttribute('href');

        // Agar URL mein link ka naam shamil hai to 'active' class add kar do
        if (currentLocation.includes(linkHref)) {
            link.classList.add('active');
        }

        // Special case for Home (index.html or empty path)
        if ((currentLocation === "/" || currentLocation.endsWith("index.html")) && linkHref === "index.html") {
            link.classList.add('active');
        }
    });
});
