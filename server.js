const express = require('express');
const session = require('express-session');
const path = require('path');
const homeRoutes = require('./routes/home.routes');
const cartRoutes = require('./routes/cart.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(session({
    secret: 'ljekarna', 
    resave: false,
    saveUninitialized: true,

}));

app.get('/', (req, res) => {
    res.redirect('/home/getCategories');
});

app.use('/home', homeRoutes);
app.use('/cart', cartRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
