const Product = require('../models/Product');

exports.getIndex = (req, res, next) => {
  Product.find().then(products => {
      res.render('index', { pageTitle: 'Internet Shop', products });
  });
};