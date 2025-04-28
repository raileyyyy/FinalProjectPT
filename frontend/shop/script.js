const products = [
    { 
        id: 1,
        name: 'Luxury Leather Collar', 
        price: 29.99, 
        rating: 4.5, 
        image: 'https://via.placeholder.com/400',
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
        image: 'https://via.placeholder.com/400',
        description: 'Ultra-soft pet bed with orthopedic support for your furry friend\'s comfort.',
        features: [
            'Memory foam base',
            'Removable, machine-washable cover',
            'Water-resistant lining',
            'Non-slip bottom'
        ]
    },
    { 
        id: 3,
        name: 'Cozy Pet Bed', 
        price: 59.99, 
        rating: 4.8, 
        image: 'https://via.placeholder.com/400',
        description: 'Ultra-soft pet bed with orthopedic support for your furry friend\'s comfort.',
        features: [
            'Memory foam base',
            'Removable, machine-washable cover',
            'Water-resistant lining',
            'Non-slip bottom'
        ]
    },
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