// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // ---------------------------
    // Existing product data arrays
    // ---------------------------
    const featuredProducts = [
        {
            id: 1,
            name: "sare",
            price: 1990,
            oldPrice: 69.99,
            image: "assets/fp 1.jpg",
            category: "Women",
            badge: "New",
            rating: { stars: 4.5, count: 24 },
            sku: "FD-001",
            stock: 12,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 2,
            name: "sare",
            price: 1300,
            oldPrice: null,
            image: "assets/fp 2.jpg",
            category: "Womens",
            badge: null,
            rating: { stars: 4, count: 18 },
            sku: "MS-002",
            stock: 20,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 3,
            name: "sare",
            price: 1150,
            oldPrice: 129.99,
            image: "assets/fp 3.jpg",
            category: "Women",
            badge: "Sale",
            rating: { stars: 5, count: 32 },
            sku: "HB-003",
            stock: 5,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 4,
            name: "panjabi",
            price: 1299,
            oldPrice: null,
            image: "assets/fp 4.jpg",
            category: "Women",
            badge: null,
            rating: { stars: 4.5, count: 41 },
            sku: "RS-004",
            stock: 8,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        // duplicate / extra entries to fill grid (keeping same as prior)
        {
            id: 5,
            name: "sare",
            price: 1990,
            oldPrice: 2200,
            image: "assets/fp 5.jpg ",
            category: "Women",
            badge: "New",
            rating: { stars: 4.5, count: 24 },
            sku: "FD-005",
            stock: 10,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 6,
            name: "সফট সিল্ক",
            price: 2100,
            oldPrice: null,
            image: "assets/fp 6.jpg",
            category: "Women",
            badge: null,
            rating: { stars: 4, count: 18 },
            sku: "MS-006",
            stock: 15,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 7,
            name: "সফট সিল্ক",
            price: 2100,
            oldPrice: 129.99,
            image: "assets/fp 7.jpg",
            category: "Women",
            badge: "Sale",
            rating: { stars: 5, count: 32 },
            sku: "HB-007",
            stock: 4,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 8,
            name: "সফট সিল্ক",
            price: 2100,
            oldPrice: null,
            image: "assets/fp 8.jpg",
            category: "Women",
            badge: null,
            rating: { stars: 4.5, count: 41 },
            sku: "RS-008",
            stock: 6,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
    ];

    // Discount products data
    const discountProducts = [
        {
            id: 101,
            name: "পাঞ্জাবি",
            category: "MEN",
            price: 1900,
            oldPrice: 4.66,
            discount: "72% OFF",
            image: "assets/pan 1.jpg",
            rating: { stars: 4.2, count: 15 },
            sku: "DJ-101",
            stock: 50,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 102,
            name: "পাঞ্জাবি",
            category: "MEN",
            price: 1300,
            oldPrice: 7.99,
            discount: "31% OFF",
            image: "assets/pan 2.jpg",
            rating: { stars: 4.5, count: 23 },
            sku: "FT-102",
            stock: 30,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 103,
            name: "পাঞ্জাবি",
            category: "MEN",
            price: 2000,
            oldPrice: 6.94,
            discount: "40% OFF",
            image: "assets/pan 3.jpg",
            rating: { stars: 4.5, count: 42 },
            sku: "CF-103",
            stock: 18,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 104,
            name: "পাঞ্জাবি",
            category: "MEN",
            price: 1600,
            oldPrice: 8.79,
            discount: "73% OFF",
            image: "assets/pan 4.jpg",
            rating: { stars: 4.0, count: 18 },
            sku: "BR-104",
            stock: 25,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 105,
            name: "পাঞ্জাবি",
            category: "MEN",
            price: 1700,
            oldPrice: 18.69,
            discount: "20% OFF",
            image: "assets/pan 5.jpg",
            rating: { stars: 4.7, count: 31 },
            sku: "MS-105",
            stock: 10,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 106,
            name: "পাঞ্জাবি",
            category: "MEN",
            price: 1900,
            oldPrice: 8.99,
            discount: "83% OFF",
            image: "assets/pan 6.jpg",
            rating: { stars: 4.3, count: 27 },
            sku: "ED-106",
            stock: 40,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 107,
            name: "পাঞ্জাবি",
            category: "MEN",
            price: 700,
            oldPrice: 19.99,
            discount: "50% OFF",
            image: "assets/pan 7.jpg",
            rating: { stars: 4.1, count: 36 },
            sku: "EL-107",
            stock: 60,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 108,
            name: "পাঞ্জাবি",
            category: "MEN",
            price: 1200,
            oldPrice: 10.99,
            discount: "41% OFF",
            image: "assets/pan 8.jpg",
            rating: { stars: 4.8, count: 52 },
            sku: "HN-108",
            stock: 22,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        }
    ];

    // Shoes products data
    const shoesProducts = [
        {
            id: 201,
            name: "ভিআইপি সিল্ক",
            category: "creative",
            price: 1299,
            oldPrice: 1199,
            discount: "25% OFF",
            image: "assets/last p 7.jpg",
            rating: { stars: 4.8, count: 42 },
            badge: "New",
            sku: "SH-201",
            stock: 14,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 202,
            name: "শাড়ি",
            category: "creative",
            price: 1299,
            oldPrice: null,
            image: "assets/last p 6.jpg",
            rating: { stars: 4.5, count: 28 },
            badge: "New",
            sku: "SH-202",
            stock: 7,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য."
        },
        {
            id: 203,
            name: "শাড়ি",
            category: "creative",
            price: 1199,
            oldPrice: 99.99,
            discount: "20% OFF",
            image: "assets/last p 5.jpg",
            rating: { stars: 4.7, count: 56 },
            badge: "New",
            sku: "SH-203",
            stock: 9,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 204,
            name: "শাড়ি",
            category: "creative",
            price: 1499,
            oldPrice: null,
            image: "assets/last p 4.jpg",
            rating: { stars: 4.9, count: 31 },
            badge: "New",
            sku: "SH-204",
            stock: 3,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 205,
            name: "শাড়ি",
            category: "creative",
            price: 6989,
            oldPrice: 89.99,
            discount: "22% OFF",
            image: "assets/last p 3.jpg",
            rating: { stars: 4.4, count: 37 },
            badge: "New",
            sku: "SH-205",
            stock: 11,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 206,
            name: "শাড়ি",
            category: "creative",
            price: 4999,
            oldPrice: null,
            image: "assets/last p 2.jpg",
            rating: { stars: 4.6, count: 24 },
            badge: "New",
            sku: "SH-206",
            stock: 18,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 207,
            name: "শাড়ি",
            category: "creative",
            price: 1099,
            oldPrice: 139.99,
            discount: "21% OFF",
            image: "assets/last p 1.jpg",
            rating: { stars: 4.8, count: 49 },
            badge: "New",
            sku: "SH-207",
            stock: 6,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        },
        {
            id: 208,
            name: "শাড়ি",
            category: "creative",
            price: 1590,
            oldPrice: null,
            image: "assets/last p 7.jpg",
            rating: { stars: 4.7, count: 22 },
            badge: "New",
            sku: "SH-208",
            stock: 5,
            description: "🌸বৈশিষ্ট্য : উচ্চমানের কাপড়, ত্বকে আরামদায়ক, হাতে বোনা ঐতিহ্যবাহী নকশা, যে কোনো উৎসব, অনুষ্ঠান বা বিশেষ দিনে পরার উপযোগী, দীর্ঘস্থায়ী ও সহজে ব্যবহারযোগ্য"
        }
    ];

    // ---------------------------
    // Helper: escape HTML & rating HTML
    // ---------------------------
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

    // ---------------------------
    // Global Event Delegation for Add to Cart - FIXED
    // ---------------------------
    function setupGlobalEventListeners() {
        // Single event delegation for all Add to Cart buttons
        document.addEventListener('click', function(e) {
            // Handle featured products Add to Cart
            if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
                const btn = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
                const card = btn.closest('.product');
                if (!card) return;
                
                const id = card.dataset.id;
                const name = card.dataset.name;
                const price = parseFloat(card.dataset.price);
                const image = card.dataset.image;
                
                addToCart(id, name, price, image);
                e.stopPropagation();
                return;
            }
            
            // Handle discount products Add to Cart
            if (e.target.classList.contains('discount-add-to-cart') || e.target.closest('.discount-add-to-cart')) {
                const btn = e.target.classList.contains('discount-add-to-cart') ? e.target : e.target.closest('.discount-add-to-cart');
                const card = btn.closest('.discount-product');
                if (!card) return;
                
                const id = card.dataset.id;
                const name = card.dataset.name;
                const price = parseFloat(card.dataset.price);
                const image = card.dataset.image;
                
                addToCart(id, name, price, image);
                e.stopPropagation();
                return;
            }
        });
    }

    // ---------------------------
    // Render functions
    // ---------------------------
    function renderFeaturedProducts() {
        const productsContainer = document.getElementById('featured-products');
        productsContainer.innerHTML = featuredProducts.map(product => `
            <div class="product" data-id="${product.id}" data-name="${escapeHTML(product.name)}" data-price="${product.price}" data-image="${product.image}" data-category="${escapeHTML(product.category)}" data-rating="${product.rating.stars}" data-rating-count="${product.rating.count}" data-oldprice="${product.oldPrice || ''}" data-sku="${product.sku}" data-stock="${product.stock}" data-description="${escapeHTML(product.description)}">
                <div class="product-image">
                    <img src="${product.image}" alt="${escapeHTML(product.name)}">
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
                        <span class="current-price">${product.price}</span>
                        ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ${generateRatingStars(product.rating)}
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `).join('');

        attachQuickViewHandlers();
    }

    function renderDiscountProducts() {
        const discountSliderTrack = document.getElementById('discount-slider-track');

        discountSliderTrack.innerHTML = discountProducts.map(product => `
            <div class="discount-product" data-id="${product.id}" data-name="${escapeHTML(product.name)}" data-price="${product.price}" data-image="${product.image}" data-category="${escapeHTML(product.category)}" data-rating="${product.rating.stars}" data-rating-count="${product.rating.count}" data-oldprice="${product.oldPrice || ''}" data-sku="${product.sku}" data-stock="${product.stock}" data-description="${escapeHTML(product.description)}">
                <div class="discount-product-image">
                    <img src="${product.image}" alt="${escapeHTML(product.name)}">
                    <span class="discount-badge">${product.discount}</span>
                </div>
                <div class="discount-product-info">
                    <h3 class="discount-product-title">${product.name}</h3>
                    <div class="discount-product-category">${product.category}</div>
                    <div class="discount-product-price">
                        <span class="discount-price">${product.price}</span>
                        <span class="original-price">${product.oldPrice}</span>
                    </div>
                    <div class="discount-product-rating">
                        ${generateRatingStars(product.rating)}
                    </div>
                    <button class="discount-add-to-cart">Add to Cart</button>
                </div>
            </div>
        `).join('');

        attachQuickViewHandlers();
    }

    function renderShoesProducts() {
        const shoesSliderTrack = document.getElementById('shoes-slider-track');

        shoesSliderTrack.innerHTML = shoesProducts.map(product => `
            <div class="discount-product" data-id="${product.id}" data-name="${escapeHTML(product.name)}" data-price="${product.price}" data-image="${product.image}" data-category="${escapeHTML(product.category)}" data-rating="${product.rating.stars}" data-rating-count="${product.rating.count}" data-oldprice="${product.oldPrice || ''}" data-sku="${product.sku}" data-stock="${product.stock}" data-description="${escapeHTML(product.description)}">
                <div class="discount-product-image">
                    <img src="${product.image}" alt="${escapeHTML(product.name)}">
                    ${product.discount ? `<span class="discount-badge">${product.discount}</span>` : ''}
                    ${product.badge ? `<span class="product-badge" style="top: 10px; right: 10px; left: auto; background-color: var(--primary-color);">${product.badge}</span>` : ''}
                </div>
                <div class="discount-product-info">
                    <h3 class="discount-product-title">${product.name}</h3>
                    <div class="discount-product-category">${product.category}</div>
                    <div class="discount-product-price">
                        <span class="discount-price">${product.price}</span>
                        ${product.oldPrice ? `<span class="original-price">${product.oldPrice}</span>` : ''}
                    </div>
                    <div class="discount-product-rating">
                        ${generateRatingStars(product.rating)}
                    </div>
                    <button class="discount-add-to-cart">Add to Cart</button>
                </div>
            </div>
        `).join('');

        attachQuickViewHandlers();
    }

    // ---------------------------
    // Slider init
    // ---------------------------
    function initDiscountSlider() {
        const track = document.getElementById('discount-slider-track');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (!track || !prevBtn || !nextBtn) return;

        let currentPosition = 0;
        const productWidth = 250 + 20; // width + gap
        const visibleProducts = Math.floor(track.parentElement.offsetWidth / productWidth) || 3;
        const maxPosition = Math.max((discountProducts.length - visibleProducts) * productWidth, 0);

        prevBtn.addEventListener('click', () => {
            currentPosition = Math.min(currentPosition + productWidth * 2, 0);
            track.style.transform = `translateX(${currentPosition}px)`;
        });

        nextBtn.addEventListener('click', () => {
            currentPosition = Math.max(currentPosition - productWidth * 2, -maxPosition);
            track.style.transform = `translateX(${currentPosition}px)`;
        });

        window.addEventListener('resize', () => {
            track.style.transform = 'translateX(0)';
            currentPosition = 0;
        });
    }

    function initShoesSlider() {
        const track = document.getElementById('shoes-slider-track');
        const prevBtn = document.querySelector('.prev-shoes-btn');
        const nextBtn = document.querySelector('.next-shoes-btn');

        if (!track || !prevBtn || !nextBtn) return;

        let currentPosition = 0;
        const productWidth = 250 + 20; // width + gap
        const visibleProducts = Math.floor(track.parentElement.offsetWidth / productWidth) || 3;
        const maxPosition = Math.max((shoesProducts.length - visibleProducts) * productWidth, 0);

        prevBtn.addEventListener('click', () => {
            currentPosition = Math.min(currentPosition + productWidth * 2, 0);
            track.style.transform = `translateX(${currentPosition}px)`;
        });

        nextBtn.addEventListener('click', () => {
            currentPosition = Math.max(currentPosition - productWidth * 2, -maxPosition);
            track.style.transform = `translateX(${currentPosition}px)`;
        });

        window.addEventListener('resize', () => {
            track.style.transform = 'translateX(0)';
            currentPosition = 0;
        });
    }

    // ---------------------------
    // Cart functionality
    // ---------------------------
    const cart = {
        items: [],
        total: 0,
        count: 0
    };

    // DOM Elements
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartSummary = document.getElementById('cart-summary');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCount = document.querySelector('.cart-count');
    const continueShopping = document.getElementById('continue-shopping');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Initialize cart from localStorage
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
                console.error('Failed to parse cart from localStorage', err);
            }
        } else {
            updateCartUI();
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

    function removeFromCart(id) {
        const idStr = String(id);
        cart.items = cart.items.filter(item => String(item.id) !== idStr);
        updateCartTotals();
        updateCartUI();
        saveCart();
    }

    function updateQuantity(id, change) {
        const idStr = String(id);
        const item = cart.items.find(item => String(item.id) === idStr);

        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(id);
                return;
            }
            updateCartTotals();
            updateCartUI();
            saveCart();
        }
    }

    function updateCartTotals() {
        cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cart.count = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    function updateCartUI() {
        cartCount.textContent = cart.count;
        if (cart.items.length === 0) {
            if (emptyCartMessage) emptyCartMessage.style.display = 'block';
            if (cartSummary) cartSummary.style.display = 'none';
        } else {
            if (emptyCartMessage) emptyCartMessage.style.display = 'none';
            if (cartSummary) cartSummary.style.display = 'block';
        }
        if (cartTotalPrice) cartTotalPrice.textContent = cart.total.toFixed(2);
        renderCartItems();
    }

    function renderCartItems() {
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';
        cart.items.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${escapeHTML(item.name)}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${escapeHTML(item.name)}</h4>
                    <div class="cart-item-price">${(item.price).toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                        <div class="quantity-value">${item.quantity}</div>
                        <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                    </div>
                    <div>
                        <a class="remove-item" data-id="${item.id}" href="#"> <i class="fas fa-trash"></i> Remove</a>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        // attach quantity and remove handlers
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const id = this.dataset.id;
                const action = this.dataset.action;
                updateQuantity(id, action === 'increase' ? 1 : -1);
            });
        });

        document.querySelectorAll('.remove-item').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const id = this.dataset.id;
                removeFromCart(id);
            });
        });
    }

    // ---------------------------
    // Toast messages
    // ---------------------------
    function showToast(message, duration = 2200) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast show';
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => {
            toast.classList.remove('show');
            try { container.removeChild(toast); } catch(e){}
        }, duration);
    }

    // ---------------------------
    // Quick View popup logic
    // ---------------------------
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

    // Attach handlers to "Quick View" icons
    function attachQuickViewHandlers() {
      document.querySelectorAll('.product-quickview, .discount-product .discount-product-image, .discount-product .discount-product-info').forEach(btn => {
        btn.addEventListener('click', (e) => {
          // find closest product card
          const card = btn.closest('.product, .discount-product');
          if (!card) return;
          const product = {
            id: card.dataset.id,
            name: card.dataset.name,
            image: card.dataset.image,
            category: card.dataset.category,
            price: card.dataset.price,
            oldPrice: card.dataset.oldprice || '',
            rating: card.dataset.rating || 0,
            sku: card.dataset.sku || '',
            stock: card.dataset.stock || '',
            description: card.dataset.description || ''
          };
          openProductPopup(product);
          e.stopPropagation();
        });
      });

      // Also ensure quickview on product-image icon is attached if newly rendered
      document.querySelectorAll('.product .product-quickview').forEach(btn => {
          btn.addEventListener('click', (e) => {
              const card = btn.closest('.product');
              if (!card) return;
              const product = {
                  id: card.dataset.id,
                  name: card.dataset.name,
                  image: card.dataset.image,
                  category: card.dataset.category,
                  price: card.dataset.price,
                  oldPrice: card.dataset.oldprice || '',
                  rating: card.dataset.rating || 0,
                  sku: card.dataset.sku || '',
                  stock: card.dataset.stock || '',
                  description: card.dataset.description || ''
              };
              openProductPopup(product);
              e.stopPropagation();
          });
      });
    }

    // Open popup with product details
    function openProductPopup(product) {
      currentProduct = product;
      popupImage.src = product.image || '';
      popupTitle.textContent = product.name || '';
      popupCategory.textContent = product.category || '';
      popupRating.innerHTML = generateRatingStars({ stars: Number(product.rating) || 0, count:  (product.rating ? (Number(product.rating)*10).toFixed(0) : 0) });
      popupPrice.textContent = `${Number(product.price).toFixed(2)}`;
      popupOldPrice.textContent = product.oldPrice ? `${Number(product.oldPrice).toFixed(2)}` : '';
      popupSku.textContent = product.sku || '#0000';
      popupStock.textContent = (Number(product.stock) > 0) ? `In Stock (${product.stock})` : 'Out of stock';
      popupDescription.textContent = product.description || '';
      qtyValue.value = 1;

      // reset option selections
      document.querySelectorAll('.swatch').forEach(sw => sw.classList.remove('active'));
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));

      popup.classList.add('active');
      popup.setAttribute('aria-hidden', 'false');
      // trap focus optionally (basic)
      setTimeout(() => {
          document.getElementById('popup-add-to-cart').focus();
      }, 150);
    }

    // Close popup
    if (popupClose) popupClose.addEventListener('click', () => {
      closePopup();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closePopup();
    });
    window.addEventListener('click', (e) => {
      if (e.target === popup) closePopup();
    });

    function closePopup() {
      if (!popup) return;
      popup.classList.remove('active');
      popup.setAttribute('aria-hidden', 'true');
    }

    // Quantity controls
    if (qtyMinus) qtyMinus.addEventListener('click', () => {
      let qty = parseInt(qtyValue.value) || 1;
      if (qty > 1) qtyValue.value = qty - 1;
    });
    if (qtyPlus) qtyPlus.addEventListener('click', () => {
      let qty = parseInt(qtyValue.value) || 1;
      qtyValue.value = qty + 1;
    });

    // Add to cart button (integrated)
    if (popupAddToCart) popupAddToCart.addEventListener('click', () => {
      const quantity = parseInt(qtyValue.value) || 1;
      if (!currentProduct) return;
      for (let i = 0; i < quantity; i++) {
        addToCart(currentProduct.id, currentProduct.name, parseFloat(currentProduct.price), currentProduct.image);
      }
      closePopup();
    });

    // Color & size interactions
    function initOptionInteractions() {
      document.querySelectorAll('.swatch').forEach(s => {
        s.addEventListener('click', () => {
          document.querySelectorAll('.swatch').forEach(sw => sw.classList.remove('active'));
          s.classList.add('active');
        });
      });

      document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }
    initOptionInteractions();

    // ---------------------------
    // Cart modal open/close
    // ---------------------------
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartModal.classList.add('active');
        });
    }
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }
    if (continueShopping) {
        continueShopping.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }

    // Checkout placeholder
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            showToast('Proceeding to checkout (demo)', 2000);
        });
    }

    // ---------------------------
    // Footer year
    // ---------------------------
    const footerYear = document.getElementById('footer-year');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    // ---------------------------
    // Search Functionality
    // ---------------------------
    function initSearchFunctionality() {
        const searchInput = document.querySelector('.search-bar input');
        const searchButton = document.querySelector('.search-bar button');
        
        if (!searchInput) return;
        
        // Combine all products for search
        const allProducts = [
            ...featuredProducts,
            ...discountProducts,
            ...shoesProducts
        ];
        
        function performSearch(query) {
            if (!query.trim()) {
                // If search is empty, restore original sections
                restoreOriginalSections();
                return;
            }
            
            const searchTerm = query.toLowerCase().trim();
            
            // Filter products that match the search term
            const results = allProducts.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                (product.description && product.description.toLowerCase().includes(searchTerm))
            );
            
            displaySearchResults(results, searchTerm);
        }
        
        function restoreOriginalSections() {
            // Hide search results and show original sections
            const searchResultsSection = document.getElementById('search-results-section');
            if (searchResultsSection) {
                searchResultsSection.style.display = 'none';
            }
            
            // Show all original sections
            const sectionsToShow = [
                '.hero',
                '.section:not(.search-results)',
                '.promo-banner',
                '.discount-section',
                '.premium-fashion-banner',
                '.new-arrivals-shoes',
                '.testimonials-section'
            ];
            
            sectionsToShow.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    el.style.display = 'block';
                });
            });
        }
        
        function displaySearchResults(results, searchTerm) {
            // Create or get search results section
            let searchResultsSection = document.getElementById('search-results-section');
            
            if (!searchResultsSection) {
                searchResultsSection = document.createElement('section');
                searchResultsSection.id = 'search-results-section';
                searchResultsSection.className = 'section search-results';
                searchResultsSection.innerHTML = `
                    <div class="container">
                        <div class="section-title">
                            <h2>Search Results</h2>
                            <p id="search-results-count"></p>
                        </div>
                        <div class="products" id="search-results-container"></div>
                    </div>
                `;
                
                // Insert after hero section
                const heroSection = document.querySelector('.hero');
                heroSection.parentNode.insertBefore(searchResultsSection, heroSection.nextSibling);
            }
            
            // Hide other sections
            const sectionsToHide = [
                '.categories',
                '.promo-banner',
                '.discount-section',
                '.premium-fashion-banner',
                '.new-arrivals-shoes',
                '.testimonials-section'
            ];
            
            sectionsToHide.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    el.style.display = 'none';
                });
            });
            
            // Show search results section
            searchResultsSection.style.display = 'block';
            
            // Update results count
            const resultsCount = document.getElementById('search-results-count');
            resultsCount.textContent = results.length > 0 
                ? `Found ${results.length} product(s) for "${searchTerm}"`
                : `No products found for "${searchTerm}"`;
            
            // Display results
            const resultsContainer = document.getElementById('search-results-container');
            
            if (results.length > 0) {
                resultsContainer.innerHTML = results.map(product => `
                    <div class="product" data-id="${product.id}" data-name="${escapeHTML(product.name)}" data-price="${product.price}" data-image="${product.image}" data-category="${escapeHTML(product.category)}" data-rating="${product.rating.stars}" data-rating-count="${product.rating.count}" data-oldprice="${product.oldPrice || ''}" data-sku="${product.sku || ''}" data-stock="${product.stock || ''}" data-description="${escapeHTML(product.description || '')}">
                        <div class="product-image">
                            <img src="${product.image}" alt="${escapeHTML(product.name)}">
                            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                            ${product.discount ? `<span class="product-badge discount-badge">${product.discount}</span>` : ''}
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
                                <span class="current-price">${product.price}</span>
                                ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ''}
                            </div>
                            <div class="product-rating">
                                ${generateRatingStars(product.rating)}
                            </div>
                            <button class="add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                `).join('');
            } else {
                resultsContainer.innerHTML = `
                    <div class="no-results" style="text-align: center; padding: 40px; grid-column: 1 / -1;">
                        <i class="fas fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
                        <h3>No products found</h3>
                        <p>Try adjusting your search terms or browse our categories.</p>
                        <button class="btn" onclick="restoreOriginalSections()" style="margin-top: 20px;">Browse All Products</button>
                    </div>
                `;
            }
            
            // Re-attach event handlers
            attachQuickViewHandlers();
        }
        
        // Event listeners
        searchButton.addEventListener('click', () => {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
        
        // Clear search when input is emptied
        searchInput.addEventListener('input', (e) => {
            if (!e.target.value.trim()) {
                restoreOriginalSections();
            }
        });
        
        // Make restoreOriginalSections available globally
        window.restoreOriginalSections = restoreOriginalSections;
    }

    // ---------------------------
    // Init everything
    // ---------------------------
    function init() {
        setupGlobalEventListeners(); // Set up global event delegation FIRST
        renderFeaturedProducts();
        renderDiscountProducts();
        renderShoesProducts();
        initCart();
        initDiscountSlider();
        initShoesSlider();
        initOptionInteractions();
        attachQuickViewHandlers();
        initSearchFunctionality(); // Add search functionality
    }

    init();

});
