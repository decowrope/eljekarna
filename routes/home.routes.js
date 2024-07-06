const express = require('express');
const router = express.Router();
const mydata = require('../data/mydata');

router.get('/getCategories', function(req, res, next) {
  const categories = mydata.getCategories(); 
  res.render('home', { 
      categories: categories,
      products: [], 
      category: null, 
      cart: req.session.cart || {}, 
      totalCount: req.session.totalCount || 0
  });
});

router.get('/getProducts/:id', function(req, res, next) {
  const categoryId = parseInt(req.params.id);
  const categories = mydata.getCategories(); 
  const products = mydata.getProductsByCategory(categoryId); 
  const category = categories.find(cat => cat.id === categoryId);

  if (!products || !category) {
      res.status(404).send('There are no products for this category');
      return;
  }

  res.render('home', { 
      categories: categories,
      products: products,
      category: category, 
      cart: req.session.cart || {}, 
      totalCount: req.session.totalCount || 0
  });
});


module.exports = router;
