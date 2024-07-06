const productDivs = document.querySelectorAll('.proizvodi_p');

    productDivs.forEach(productDiv => {
        const cartIcon = productDiv.querySelector('.cart-icon');
        const img = productDiv.querySelector('.proizvodi_p_img');

        productDiv.addEventListener('mouseenter', () => {
            cartIcon.style.display = 'block';
            img.style.opacity = '0.2';
        });

        productDiv.addEventListener('mouseleave', () => {
            cartIcon.style.display = 'none';
            img.style.opacity = '1';
        });
    });