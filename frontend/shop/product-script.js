document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (product) {
        document.getElementById('productImage').src = product.image;
        document.getElementById('productImage').alt = product.name;
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productRating').innerHTML = generateStarRating(product.rating);
        document.getElementById('productPrice').textContent = `P${product.price.toFixed(2)}`;
        document.getElementById('productDescription').textContent = product.description;

        const featuresList = document.getElementById('productFeatures');
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        const productControls = document.getElementById('productControls');
        if (productControls) {
            const stock = 10;

            productControls.innerHTML = `
                <label for="quantity">Quantity:</label>
                <div class="quantity-selector">
                    <button type="button" class="qty-btn minus">−</button>
                    <input type="number" id="quantity" name="quantity" min="1" max="${stock}" value="1" />
                    <button type="button" class="qty-btn plus">+</button>
                </div>
                <p>Stock available: <strong>${stock}</strong></p>
                <button id="addToCartBtn" class="add-to-cart-btn">Add to Cart</button>
            `;

            document.querySelector('.qty-btn.plus').addEventListener('click', () => {
                const input = document.getElementById('quantity');
                if (parseInt(input.value) < parseInt(input.max)) {
                  input.value = parseInt(input.value) + 1;
                }
              });
              
              document.querySelector('.qty-btn.minus').addEventListener('click', () => {
                const input = document.getElementById('quantity');
                if (parseInt(input.value) > parseInt(input.min)) {
                  input.value = parseInt(input.value) - 1;
                }
              });


            document.getElementById('addToCartBtn').addEventListener('click', () => {
                const quantity = parseInt(document.getElementById('quantity').value);
                if (quantity > 0 && quantity <= stock) {
                    alert(`${quantity} x "${product.name}" added to cart.`);
                } else {
                    alert('Please enter a valid quantity.');
                }
            });
        }

        document.title = `${product.name} | Paws & Claws`;
    } else {
        window.location.href = 'index.html';
    }
});

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '½';
    }
    return `${stars} ${rating.toFixed(1)}`;
}

const products = [
    { 
        id: 1,
        name: 'Luxury Leather Collar', 
        price: 29.99, 
        rating: 4.5, 
        image: '../../assets/leather_collar.jpg',
        description: 'Premium leather collar with adjustable fit and stylish design. Perfect for both comfort and fashion.',
        features: [
            'Genuine leather construction',
            'Adjustable sizing from 12-18 inches',
            'Rust-proof metal buckle',
            'Available in 5 colors'
        ]
    },
    { 
        id: 2,
        name: 'Cozy Pet Bed', 
        price: 59.99, 
        rating: 4.8, 
        image: '../../assets/petBed.jpg',
        description: 'Ultra-soft pet bed with orthopedic support for your furry friend\'s comfort.',
        features: [
            'Memory foam base',
            'Removable, machine-washable cover',
            'Water-resistant lining',
            'Non-slip bottom',
            'Available in 6 colors'
        ]
    },
    { 
        id: 3,
        name: 'Squeaky Plush Toy', 
        price: 14.99, 
        rating: 4.3, 
        image: '../../assets/plushToy.jpg',
        description: 'Fun and cuddly squeaky toy that keeps your pet entertained for hours.',
        features: [
            'Soft plush material',
            'Built-in squeaker',
            'Safe for chewing',
            'Machine washable'
        ]
    },
    { 
        id: 4,
        name: 'Stainless Steel Food Bowl', 
        price: 19.99, 
        rating: 4.6, 
        image: 'https://via.placeholder.com/800',
        description: 'Durable and hygienic stainless steel bowl for food or water.',
        features: [
            'Non-slip rubber base',
            'Dishwasher safe',
            'Rust-resistant',
            'Available in 3 sizes'
        ]
    },
    { 
        id: 5,
        name: 'Pet Grooming Brush Set', 
        price: 24.99, 
        rating: 4.7, 
        image: 'https://via.placeholder.com/800',
        description: 'Keep your pet’s coat shiny and healthy with this complete grooming set.',
        features: [
            'Includes detangler, slicker, and shedding brush',
            'Ergonomic handles',
            'Suitable for all coat types',
            'Gentle on skin'
        ]
    },
    { 
        id: 6,
        name: 'Waterproof Dog Raincoat', 
        price: 34.99, 
        rating: 4.4, 
        image: 'https://via.placeholder.com/800',
        description: 'Stylish waterproof raincoat to keep your dog dry during rainy walks.',
        features: [
            'Adjustable straps',
            'Reflective strips for safety',
            'Lightweight and breathable',
            'Available in 4 sizes'
        ]
    },
    { 
        id: 7,
        name: 'Interactive Laser Toy', 
        price: 22.50, 
        rating: 4.2, 
        image: 'https://via.placeholder.com/800',
        description: 'Automatic laser pointer for endless interactive fun with your cat or small dog.',
        features: [
            'Hands-free operation',
            'Multiple motion patterns',
            'USB rechargeable',
            'Auto shut-off timer'
        ]
    },
    { 
        id: 8,
        name: 'Pet Travel Carrier', 
        price: 49.95, 
        rating: 4.5, 
        image: 'https://via.placeholder.com/800',
        description: 'Comfortable and airline-approved travel carrier for small pets.',
        features: [
            'Padded shoulder strap',
            'Ventilated mesh sides',
            'Removable fleece mat',
            'Foldable for storage'
        ]
    },
    { 
        id: 9,
        name: 'Chew-Resistant Leash', 
        price: 18.75, 
        rating: 4.3, 
        image: 'https://via.placeholder.com/800',
        description: 'Heavy-duty leash designed to withstand pulling and chewing.',
        features: [
            'Nylon-coated steel cable',
            'Comfort-grip handle',
            'Tangle-free design',
            '5 feet length'
        ]
    },
    { 
        id: 10,
        name: 'Organic Dog Treats', 
        price: 12.99, 
        rating: 4.9, 
        image: 'https://via.placeholder.com/800',
        description: 'All-natural, grain-free treats made with real chicken and veggies.',
        features: [
            'No artificial additives',
            'Rich in protein and fiber',
            'Ideal for training',
            'Resealable pouch'
        ]
    }
];
