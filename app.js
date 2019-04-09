const express = require('express');
const app = express();
const path = require('path');
const error = require('./controllers/error');
const shopRoutes = require('./routes/shop');
const mongodb = require('mongodb');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use(error.get404);

mongodb
    .connect('mongodb+srv://bogdaholas:bogdan2404@database-1bdgh.mongodb.net/shop?retryWrites=true')
    .then(() => {
        app.listen(3000);
    });

