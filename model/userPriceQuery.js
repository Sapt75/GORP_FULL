const mongoose = require('mongoose');

const priceQuery = new mongoose.Schema({
    name: { type: String },
    car: { type: String, },
    email: { type: String, },
    number: { type: Number },
    // pincode: { type: Number },
    city: {type: String}
}, {
    timestamps: true
}, {collection: 'pricequeries'})

const PriceQuery = mongoose.model('PriceQuery', priceQuery);

module.exports = PriceQuery;