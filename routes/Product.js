const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers/Productcontroller');

// GET /api/products - Get all products with pagination and sorting
router.get('/', getProducts);

// GET /api/products/:id - Get single product by ID
router.get('/:id', getProductById);

module.exports = router;