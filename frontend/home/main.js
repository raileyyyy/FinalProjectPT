// Cart click handler
    document.querySelector('.cart-button').addEventListener('click',function() {
            alert('Cart clicked!');
            // You can replace this with actual cart logic later
            // window.location.href = '/cart'; // To navigate to cart page
        });

// Dynamic year for copyright
    document.getElementById('current-year').textContent = new Date().getFullYear();