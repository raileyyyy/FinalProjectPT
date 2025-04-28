document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (product) {
        document.getElementById('productImage').src = product.image;
        document.getElementById('productImage').alt = product.name;
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productRating').innerHTML = generateStarRating(product.rating);
        document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('productDescription').textContent = product.description;
        
        const featuresList = document.getElementById('productFeatures');
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
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
        image: 'https://via.placeholder.com/800',
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
        image: 'https://via.placeholder.com/800',
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
        image: 'https://via.placeholder.com/800',
        description: 'Ultra-soft pet bed with orthopedic support for your furry friend\'s comfort.',
        features: [
            'Memory foam base',
            'Removable, machine-washable cover',
            'Water-resistant lining',
            'Non-slip bottom'
        ]
    },
];