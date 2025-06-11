const express = require('express');
const router = express.Router();
const { 
  getCart, 
  addToCart, 
  updateCartItem, 
  removeFromCart 
} = require('../controllers/Cartcontroller');

// GET /api/cart - Get cart items
router.get('/', getCart);

// POST /api/cart/add - Add item to cart
router.post('/add', addToCart);

// PUT /api/cart/update - Update cart item quantity
router.put('/update', updateCartItem);

// DELETE /api/cart/remove/:productId - Remove item from cart
router.delete('/remove/:productId', removeFromCart);

module.exports = router;