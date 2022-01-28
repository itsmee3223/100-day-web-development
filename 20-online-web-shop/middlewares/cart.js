const Cart = require("../models/cart.model");

function intitializeCart(req, res, next) {
  let cart;

  if (!cart) {
    cart = new Cart();
  } else {
    cart = new Cart(req.session.cart.items);
  }

  res.locals.cart = cart;
  next();
}

module.exports = intitializeCart;
