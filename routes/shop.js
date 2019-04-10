const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);
router.get('/signup', shopController.getSignUp);
router.post('/signup', shopController.postSignUp);
router.get('/login', shopController.getLogIn);
router.post('/login', shopController.postLogIn);

module.exports = router;