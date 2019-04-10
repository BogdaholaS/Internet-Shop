const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    image: String,
    title: String,
    price: Number,
});

module.exports = mongoose.model('Product', productSchema);