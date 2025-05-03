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
            'Availabe in 6 colors'
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
    return `<span class="rating">${stars} ${rating.toFixed(1)}</span>`;
}

function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col';
        productCard.innerHTML = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                ${generateStarRating(product.rating)}
                <h4 class="product-title">${product.name}</h4>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        
        productCard.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
        
        productGrid.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            console.log('Filter changed');
        });
    });
});