document.addEventListener("DOMContentLoaded", () => {
    const cartIcons = document.querySelectorAll('.cart-icon'); 
    const cartCounter = document.querySelector('.cart-counter');


    cartIcons.forEach(cartIcon => {
        cartIcon.addEventListener('click', () => {
            const productId = cartIcon.dataset.productId; 

            fetch(`/cart/add/${productId}`, { method: 'POST' }) 
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to add product to cart');
                    }
                    return response.json();
                })
                .then(data => {
                    if (typeof data.totalCount !== 'undefined') {
                        cartCounter.innerText = data.totalCount; 
                    }
                    setTimeout(() => {
                        window.location.reload(); 
                    }, 0);
                })
                .catch(error => {
                    console.error('Error adding product to cart:', error);
                });
        });
    });
});
