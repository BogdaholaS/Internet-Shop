const express = require('express');
const app = express();
const path = require('path');
const error = require('./controllers/error');
const shopRoutes = require('./routes/shop');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use(error.get404);

mongoose
    .connect('mongodb+srv://bogdaholas:bogdan2404@database-1bdgh.mongodb.net/products?retryWrites=true')
    .then(() => {
        app.listen(3000);
    });

