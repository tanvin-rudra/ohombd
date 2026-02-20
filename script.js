// Updated script.js - Loads products from localStorage
document.addEventListener('DOMContentLoaded', function() {
    // Global products array (will be populated from localStorage)
    let featuredProducts = [];
    let discountProducts = [];
    let shoesProducts = [];

    // Load products from localStorage
    function loadProductsFromStorage() {
        const savedProducts = localStorage.getItem('styleVogueProducts');
        if (savedProducts) {
            try {
                const allProducts = JSON.parse(savedProducts);
                
                // Split products into different categories
                featuredProducts = allProducts.slice(0, 8); // First 8 products for featured
                discountProducts = allProducts.filter(p => p.discount || p.oldPrice).slice(0, 8);
                shoesProducts = allProducts.slice(8, 16); // Next 8 products
                
                // If we don't have enough products, add defaults
                if (featuredProducts.length === 0) {
                    setDefaultProducts();
                }
            } catch (e) {
                console.error('Error loading products', e);
                setDefaultProducts();
            }
        } else {
            setDefaultProducts();
        }
    }

    // Default products if localStorage is empty
    function setDefaultProducts() {
        featuredProducts = [
            {
                id: 1,
                name: "কটন মিক্সড হাফ সিল্ক",
                price: 2100,
                oldPrice: null,
                image: "assets/new 2.jpg",
                category: "Women",
                badge: "New",
                rating: { stars: 4.5, count: 24 },
                sku: "FD-001",
                stock: 12,
                description: "উচ্চমানের কাপড়, ত্বকে আরামদায়ক"
            },
            {
                id: 2,
                name: "পিওর কটন জরি কাজের",
                price: 1800,
                oldPrice: null,
                image: "assets/new 1.jpg",
                category: "Women",
                badge: "New",
                rating: { stars: 4.5, count: 24 },
                sku: "FD-002",
                stock: 15,
                description: "পিওর কটন। জরি কাজের। ব্লাউজ পিস সহ"
            }
        ];
        
        discountProducts = [
            {
                id: 101,
                name: "পাঞ্জাবি",
                category: "Men",
                price: 1900,
                oldPrice: 2500,
                discount: "24% OFF",
                image: "assets/pan 1.jpg",
                rating: { stars: 4.2, count: 15 },
                sku: "DJ-101",
                stock: 50,
                description: "উচ্চমানের কাপড়"
            }
        ];
        
        shoesProducts = [
            {
                id: 201,
                name: "ভিআইপি সিল্ক",
                category: "Women",
                price: 89.99,
                oldPrice: 119.99,
                discount: "25% OFF",
                image: "assets/last p 7.jpg",
                rating: { stars: 4.8, count: 42 },
                sku: "SH-201",
                stock: 14,
                description: "উচ্চমানের কাপড়"
            }
        ];
    }

    // Load products first
    loadProductsFromStorage();

    // Helper functions
    function escapeHTML(str) {
        if (!str && str !== 0) return '';
        return String(str).replace(/[&<>"']/g, function(m) {
            return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
        });
    }

    function generateRatingStars(rating) {
        const starsVal = Number(rating.stars) || 0;
        const fullStars = Math.floor(starsVal);
        const hasHalfStar = (starsVal % 1) !== 0;
        let starsHTML = '';

        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        const emptyStars = 5 - Math.ceil(starsVal);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        starsHTML += ` <span>(${rating.count || 0})</span>`;
        return starsHTML;
    }

    // Global Event Delegation
    function setupGlobalEventListeners() {
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
                const btn = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
                const card = btn.closest('.product, .discount-product');
                if (!card) return;
                
                const id = card.dataset.id;
                const name = card.dataset.name;
                const price = parseFloat(card.dataset.price);
                const image = card.dataset.image;
                
                addToCart(id, name, price, image);
                e.stopPropagation();
            }
        });
    }

    // Render functions
    function renderFeaturedProducts() {
        const productsContainer = document.getElementById('featured-products');
        if (!productsContainer) return;
        
        productsContainer.innerHTML = featuredProducts.map(product => `
            <div class="product" data-id="${product.id}" data-name="${escapeHTML(product.name)}" data-price="${product.price}" data-image="${product.image}" data-category="${escapeHTML(product.category)}" data-rating="${product.rating?.stars || 4.5}" data-rating-count="${product.rating?.count || 0}" data-oldprice="${product.oldPrice || ''}" data-sku="${product.sku || ''}" data-stock="${product.stock || 10}" data-description="${escapeHTML(product.description || '')}">
                <div class="product-image">
                    <img src="${product.image}" alt="${escapeHTML(product.name)}" onerror="this.src='https://via.placeholder.com/300x400'">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <div class="product-actions">
                        <div class="product-action product-quickview" title="Quick view"><i class="fas fa-search"></i></div>
                        <div class="product-action"><i class="far fa-heart"></i></div>
                        <div class="product-action"><i class="fas fa-sync-alt"></i></div>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">$${product.price}</span>
                        ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ${generateRatingStars(product.rating || {stars: 4.5, count: 24})}
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `).join('');

        attachQuickViewHandlers();
    }

    function renderDiscountProducts() {
        const discountSliderTrack = document.getElementById('discount-slider-track');
        if (!discountSliderTrack) return;

        discountSliderTrack.innerHTML = discountProducts.map(product => `
            <div class="discount-product" data-id="${product.id}" data-name="${escapeHTML(product.name)}" data-price="${product.price}" data-image="${product.image}" data-category="${escapeHTML(product.category)}" data-rating="${product.rating?.stars || 4.5}" data-rating-count="${product.rating?.count || 0}" data-oldprice="${product.oldPrice || ''}" data-sku="${product.sku || ''}" data-stock="${product.stock || 10}" data-description="${escapeHTML(product.description || '')}">
                <div class="discount-product-image">
                    <img src="${product.image}" alt="${escapeHTML(product.name)}" onerror="this.src='https://via.placeholder.com/300x400'">
                    <span class="discount-badge">${product.discount || 'SALE'}</span>
                </div>
                <div class="discount-product-info">
                    <h3 class="discount-product-title">${product.name}</h3>
                    <div class="discount-product-category">${product.category}</div>
                    <div class="discount-product-price">
                        <span class="discount-price">$${product.price}</span>
                        <span class="original-price">$${product.oldPrice}</span>
                    </div>
                    <div class="discount-product-rating">
                        ${generateRatingStars(product.rating || {stars: 4.5, count: 24})}
                    </div>
                    <button class="discount-add-to-cart">Add to Cart</button>
                </div>
            </div>
        `).join('');

        attachQuickViewHandlers();
    }

    function renderShoesProducts() {
        const shoesSliderTrack = document.getElementById('shoes-slider-track');
        if (!shoesSliderTrack) return;

        shoesSliderTrack.innerHTML = shoesProducts.map(product => `
            <div class="discount-product" data-id="${product.id}" data-name="${escapeHTML(product.name)}" data-price="${product.price}" data-image="${product.image}" data-category="${escapeHTML(product.category)}" data-rating="${product.rating?.stars || 4.5}" data-rating-count="${product.rating?.count || 0}" data-oldprice="${product.oldPrice || ''}" data-sku="${product.sku || ''}" data-stock="${product.stock || 10}" data-description="${escapeHTML(product.description || '')}">
                <div class="discount-product-image">
                    <img src="${product.image}" alt="${escapeHTML(product.name)}" onerror="this.src='https://via.placeholder.com/300x400'">
                    ${product.discount ? `<span class="discount-badge">${product.discount}</span>` : ''}
                    ${product.badge ? `<span class="product-badge" style="top: 10px; right: 10px; left: auto; background-color: var(--primary-color);">${product.badge}</span>` : ''}
                </div>
                <div class="discount-product-info">
                    <h3 class="discount-product-title">${product.name}</h3>
                    <div class="discount-product-category">${product.category}</div>
                    <div class="discount-product-price">
                        <span class="discount-price">$${product.price}</span>
                        ${product.oldPrice ? `<span class="original-price">$${product.oldPrice}</span>` : ''}
                    </div>
                    <div class="discount-product-rating">
                        ${generateRatingStars(product.rating || {stars: 4.5, count: 24})}
                    </div>
                    <button class="discount-add-to-cart">Add to Cart</button>
                </div>
            </div>
        `).join('');

        attachQuickViewHandlers();
    }

    // Slider init functions (keep your existing slider code)
    function initDiscountSlider() {
        const track = document.getElementById('discount-slider-track');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (!track || !prevBtn || !nextBtn) return;

        let currentPosition = 0;
        const productWidth = 250 + 20;

        prevBtn.addEventListener('click', () => {
            currentPosition = Math.min(currentPosition + productWidth * 2, 0);
            track.style.transform = `translateX(${currentPosition}px)`;
        });

        nextBtn.addEventListener('click', () => {
            const maxPosition = Math.max((discountProducts.length - 3) * productWidth, 0);
            currentPosition = Math.max(currentPosition - productWidth * 2, -maxPosition);
            track.style.transform = `translateX(${currentPosition}px)`;
        });
    }

    function initShoesSlider() {
        const track = document.getElementById('shoes-slider-track');
        const prevBtn = document.querySelector('.prev-shoes-btn');
        const nextBtn = document.querySelector('.next-shoes-btn');

        if (!track || !prevBtn || !nextBtn) return;

        let currentPosition = 0;
        const productWidth = 250 + 20;

        prevBtn.addEventListener('click', () => {
            currentPosition = Math.min(currentPosition + productWidth * 2, 0);
            track.style.transform = `translateX(${currentPosition}px)`;
        });

        nextBtn.addEventListener('click', () => {
            const maxPosition = Math.max((shoesProducts.length - 3) * productWidth, 0);
            currentPosition = Math.max(currentPosition - productWidth * 2, -maxPosition);
            track.style.transform = `translateX(${currentPosition}px)`;
        });
    }

    // Cart functionality (keep your existing cart code)
    const cart = {
        items: [],
        total: 0,
        count: 0
    };

    function initCart() {
        const savedCart = localStorage.getItem('styleVogueCart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                cart.items = parsedCart.items || [];
                cart.total = parsedCart.total || 0;
                cart.count = parsedCart.count || 0;
                updateCartUI();
            } catch (err) {
                console.error('Failed to parse cart', err);
            }
        }
    }

    function saveCart() {
        localStorage.setItem('styleVogueCart', JSON.stringify(cart));
    }

    function addToCart(id, name, price, image) {
        const idStr = String(id);
        const existingItem = cart.items.find(item => String(item.id) === idStr);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.items.push({
                id: idStr,
                name: name,
                price: Number(price),
                image: image,
                quantity: 1
            });
        }

        updateCartTotals();
        updateCartUI();
        saveCart();
        showToast(`${name} added to cart!`);
    }

    function updateCartTotals() {
        cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cart.count = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    function updateCartUI() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) cartCount.textContent = cart.count;
        
        const cartTotalPrice = document.getElementById('cart-total-price');
        if (cartTotalPrice) cartTotalPrice.textContent = cart.total.toFixed(2);
        
        renderCartItems();
    }

    function renderCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        const emptyCartMessage = document.getElementById('empty-cart-message');
        const cartSummary = document.getElementById('cart-summary');
        
        if (!cartItemsContainer) return;
        
        if (cart.items.length === 0) {
            if (emptyCartMessage) emptyCartMessage.style.display = 'block';
            if (cartSummary) cartSummary.style.display = 'none';
            cartItemsContainer.innerHTML = '';
            return;
        }
        
        if (emptyCartMessage) emptyCartMessage.style.display = 'none';
        if (cartSummary) cartSummary.style.display = 'block';
        
        cartItemsContainer.innerHTML = cart.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${escapeHTML(item.name)}" onerror="this.src='https://via.placeholder.com/80'">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${escapeHTML(item.name)}</h4>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                        <div class="quantity-value">${item.quantity}</div>
                        <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                    </div>
                    <div>
                        <a class="remove-item" data-id="${item.id}" href="#"><i class="fas fa-trash"></i> Remove</a>
                    </div>
                </div>
            </div>
        `).join('');

        // Attach quantity handlers
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const id = this.dataset.id;
                const action = this.dataset.action;
                const item = cart.items.find(i => String(i.id) === id);
                if (item) {
                    if (action === 'increase') {
                        item.quantity += 1;
                    } else {
                        item.quantity -= 1;
                        if (item.quantity <= 0) {
                            cart.items = cart.items.filter(i => String(i.id) !== id);
                        }
                    }
                    updateCartTotals();
                    updateCartUI();
                    saveCart();
                }
            });
        });

        document.querySelectorAll('.remove-item').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const id = this.dataset.id;
                cart.items = cart.items.filter(i => String(i.id) !== id);
                updateCartTotals();
                updateCartUI();
                saveCart();
            });
        });
    }

    // Toast function
    function showToast(message, duration = 2200) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast show';
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                try { container.removeChild(toast); } catch(e) {}
            }, 300);
        }, duration);
    }

    // Quick View Popup
    const popup = document.getElementById('product-popup');
    const popupClose = document.getElementById('popup-close');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupCategory = document.getElementById('popup-category');
    const popupRating = document.getElementById('popup-rating');
    const popupPrice = document.getElementById('popup-price');
    const popupOldPrice = document.getElementById('popup-oldprice');
    const popupAddToCart = document.getElementById('popup-add-to-cart');
    const qtyValue = document.getElementById('qty-value');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');
    const popupSku = document.getElementById('popup-sku');
    const popupStock = document.getElementById('popup-stock');
    const popupDescription = document.getElementById('popup-description');

    let currentProduct = null;

    function attachQuickViewHandlers() {
        document.querySelectorAll('.product-quickview, .discount-product .discount-product-image').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = btn.closest('.product, .discount-product');
                if (!card) return;
                
                const product = {
                    id: card.dataset.id,
                    name: card.dataset.name,
                    image: card.dataset.image,
                    category: card.dataset.category,
                    price: card.dataset.price,
                    oldPrice: card.dataset.oldprice || '',
                    rating: card.dataset.rating || 4.5,
                    ratingCount: card.dataset.ratingCount || 24,
                    sku: card.dataset.sku || 'SKU-001',
                    stock: card.dataset.stock || 10,
                    description: card.dataset.description || ''
                };
                
                openProductPopup(product);
                e.stopPropagation();
            });
        });
    }

    function openProductPopup(product) {
        currentProduct = product;
        popupImage.src = product.image || 'https://via.placeholder.com/400x500';
        popupTitle.textContent = product.name || '';
        popupCategory.textContent = product.category || '';
        popupRating.innerHTML = generateRatingStars({ 
            stars: Number(product.rating) || 4.5, 
            count: Number(product.ratingCount) || 24 
        });
        popupPrice.textContent = `$${Number(product.price).toFixed(2)}`;
        popupOldPrice.textContent = product.oldPrice ? `$${Number(product.oldPrice).toFixed(2)}` : '';
        popupSku.textContent = product.sku || '#0000';
        popupStock.textContent = (Number(product.stock) > 0) ? `In Stock (${product.stock})` : 'Out of stock';
        popupDescription.textContent = product.description || '';
        qtyValue.value = 1;

        popup.classList.add('active');
        popup.setAttribute('aria-hidden', 'false');
    }

    if (popupClose) {
        popupClose.addEventListener('click', () => {
            popup.classList.remove('active');
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            popup.classList.remove('active');
        }
    });

    if (qtyMinus) {
        qtyMinus.addEventListener('click', () => {
            let qty = parseInt(qtyValue.value) || 1;
            if (qty > 1) qtyValue.value = qty - 1;
        });
    }

    if (qtyPlus) {
        qtyPlus.addEventListener('click', () => {
            let qty = parseInt(qtyValue.value) || 1;
            qtyValue.value = qty + 1;
        });
    }

    if (popupAddToCart) {
        popupAddToCart.addEventListener('click', () => {
            const quantity = parseInt(qtyValue.value) || 1;
            if (!currentProduct) return;
            for (let i = 0; i < quantity; i++) {
                addToCart(currentProduct.id, currentProduct.name, parseFloat(currentProduct.price), currentProduct.image);
            }
            popup.classList.remove('active');
        });
    }

    // Cart modal
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const continueShopping = document.getElementById('continue-shopping');

    if (cartIcon && cartModal) {
        cartIcon.addEventListener('click', () => {
            cartModal.classList.add('active');
        });
    }

    if (closeCart && cartModal) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }

    if (continueShopping && cartModal) {
        continueShopping.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }

    // Footer year
    const footerYear = document.getElementById('footer-year');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    // Initialize everything
    function init() {
        setupGlobalEventListeners();
        renderFeaturedProducts();
        renderDiscountProducts();
        renderShoesProducts();
        initCart();
        initDiscountSlider();
        initShoesSlider();
        attachQuickViewHandlers();
    }

    init();
});
