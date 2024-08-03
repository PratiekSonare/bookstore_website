// routes/cart.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Get Cart
router.get('/:userId', async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.bookId');
  res.json(cart);
});

// Add to Cart
router.post('/:userId', async (req, res) => {
  const { bookId } = req.body;
  let cart = await Cart.findOne({ userId: req.params.userId });
  if (!cart) {
    cart = new Cart({ userId: req.params.userId, items: [{ bookId }] });
  } else {
    const itemIndex = cart.items.findIndex(item => item.bookId == bookId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({ bookId });
    }
  }
  await cart.save();
  res.json(cart);
});

// Remove from Cart
router.delete('/:userId/:bookId', async (req, res) => {
  const { userId, bookId } = req.params;
  let cart = await Cart.findOne({ userId });
  cart.items = cart.items.filter(item => item.bookId != bookId);
  await cart.save();
  res.json(cart);
});

module.exports = router;
