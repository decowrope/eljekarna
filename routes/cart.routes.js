const express = require('express');
const router = express.Router();
const mydata = require('../data/mydata');

router.post('/add/:id', (req, res) => {
    const productId = parseInt(req.params.id); 

    req.session.cart = req.session.cart || {}; 
    req.session.cart[productId] = (req.session.cart[productId] || 0) + 1; 

    req.session.totalCount = Object.values(req.session.cart).reduce((acc, curr) => acc + curr, 0); 

    res.json({ success: true }); 
});


router.post('/remove/:id', (req, res) => {
    const productId = parseInt(req.params.id); 

    req.session.cart = req.session.cart || {};
    if (req.session.cart[productId] > 0) {
        req.session.cart[productId] -= 1;
        if (req.session.cart[productId] === 0) {
            delete req.session.cart[productId];
        }
    }

    req.session.totalCount = Object.values(req.session.cart).reduce((acc, curr) => acc + curr, 0); 

    res.json({ success: true }); 
});

router.get('/getAll', (req, res) => {
    const cart = req.session.cart || {}; 
    const cartItems = Object.entries(cart).map(([productId, quantity]) => ({
        id: parseInt(productId),
        quantity: quantity
    }));
    const totalCount = Object.values(req.session.cart || {}).reduce((acc, curr) => acc + curr, 0); // Ukupan broj proizvoda u korpi

    res.json({ cart: cartItems, totalCount });
});

router.get('/', (req, res) => {
    const cart = req.session.cart || {}; 
    const cartItems = Object.entries(cart).map(([productId, quantity]) => ({
        id: parseInt(productId),
        quantity: quantity
    }));
    const totalCount = Object.values(req.session.cart || {}).reduce((acc, curr) => acc + curr, 0); // Ukupan broj proizvoda u košarici

    const cartItemsWithNames = cartItems.map(item => {
        const product = mydata.getAllProducts().find(product => product.id === item.id);
        return {
            id: item.id,
            name: product.name,
            quantity: item.quantity
        }; 
    });

    res.render('cart', { cart: cartItemsWithNames, totalCount }); 
});




module.exports = router;
