const Cart = require('../models/cart.model');

function addCartItem(req, res){
  res.local.cart.addItem()
}

module.exports = {
  addCartItem: addCartItem
}