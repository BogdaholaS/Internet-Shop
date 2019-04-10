const Product = require('../models/Product');
const User = require('../models/Users');

exports.getIndex = (req, res, next) => {
  Product.find().then(products => {
      res.render('index', { pageTitle: 'Internet Shop', products });
  });
};

exports.getSignUp = (req, res, next) => {
    res.render('signup', { pageTitle: 'Sign Up' });
};

exports.postSignUp = (req, res, next) => {
    const userData = {
         email: req.body.email,
         password:  req.body.password,
         confirmPassword:  req.body.confirmPassword,
    };
    const user = new User({email: userData.email, password: userData.password});
    user.save().then(result => {
        res.redirect('/login');
    });
};

exports.getLogIn = (req, res, next) => {
    res.render('login', { pageTitle: 'Log In' });
};

exports.postLogIn = (req, res, next) => {
    const userData = { email: req.body.email, password: req.body.password };
    User.find({email: userData.email, password: userData.password }).then(result => {
        console.log("Connected");
        console.log(result);
    }).catch(err => {
        console.log("UnConnected");
        console.log(err);
    })
};














