document.addEventListener("DOMContentLoaded", () => {
    const incrementButtons = document.querySelectorAll('.increment-btn');
    const decrementButtons = document.querySelectorAll('.decrement-btn');
    const cartIcon = document.querySelector('.ri-shopping-cart-line');

    const updateCartCounter = () => {
        fetch('/cart/getAll')
            .then(response => response.json())
            .then(data => {
                let cartCounter = document.querySelector('.cart-counter');
                
                if (data.totalCount > 0) {
                    if (!cartCounter) {
                        cartCounter = document.createElement('p');
                        cartCounter.className = 'cart-counter';
                        cartIcon.appendChild(cartCounter);
                    }
                    cartCounter.innerText = data.totalCount;
                } else if (cartCounter) {
                    cartCounter.remove();
                }
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    };

    const reloadPage = () => {
        location.reload();
    };

    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.id;

            fetch(`/cart/add/${productId}`, { method: 'POST' })
                .then(response => response.json())
                .then(data => {
                    updateCartCounter();
                    setTimeout(() => {
                        window.location.reload(); 
                    }, 0);
                })
                .catch(error => {
                    console.error('Error adding product to cart:', error);
                });
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.id;

            fetch(`/cart/remove/${productId}`, { method: 'POST' })
                .then(response => response.json())
                .then(data => {
                    updateCartCounter();
                    setTimeout(() => {
                        window.location.reload(); 
                    }, 0);
                })
                .catch(error => {
                    console.error('Error removing product from cart:', error);
                });
        });
    });

    updateCartCounter();
});
