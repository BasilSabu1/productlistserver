const Cart = require('../models/Cart');

// Static products data (same as in ProductController)
const staticProducts = [
  {
  id: 1,
  name: "Noise-Cancelling Over-Ear Headphones",
  price: 89.99,
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80",
  image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=60",
  image2: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop&q=60",
  image3: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop&q=60",
  description: "High-quality noise-cancelling headphones with 35-hour battery life and superior sound. Ideal for travel and work.",
  inventory: 20,
  category: "Electronics",
  brand: "SoundWave"
},
{
  "id": 3,
  "name": "Premium Wireless Speaker",
  "price": 89.99,
  "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&q=80",
  "image1": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&q=60",
  "image2": "https://images.unsplash.com/photo-1558379850-823f103f866a?w=400&h=400&fit=crop&q=60",
  "image3": "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=400&h=400&fit=crop&q=60",
  "description": "High-quality Bluetooth speaker with 20-hour battery life and deep bass. Water-resistant design perfect for outdoor use.",
  "inventory": 32,
  "category": "Electronics",
  "brand": "SoundWave"
},
 {
  "id": 4,
  "name": "Smart Fitness Watch",
  "price": 129.99,
  "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80",
  "image1": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=60",
  "image2": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop&q=60",
  "image3": "https://images.unsplash.com/photo-1558126319-c9feecbf57ee?w=400&h=400&fit=crop&q=60",
  "description": "Track your fitness, heart rate, and sleep patterns with this advanced smartwatch.",
  "inventory": 28,
  "category": "Electronics",
  "brand": "FitTech"
},
 {
  "id": 5,
  "name": "Travel Backpack",
  "price": 59.99,
  "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80",
  "image1": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=60",
  "image2": "https://images.unsplash.com/photo-1577732024748-d6d5e4adf5b1?w=400&h=400&fit=crop&q=60",
  "image3": "https://images.unsplash.com/photo-1577732024748-d6d5e4adf5b1?w=400&h=400&fit=crop&q=60",
  "description": "Durable 30L backpack with laptop compartment and USB charging port.",
  "inventory": 41,
  "category": "Accessories",
  "brand": "TravelPro"
},
 {
  "id": 6,
  "name": "Insulated Stainless Bottle",
  "price": 34.99,
  "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&q=80",
  "image1": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&q=60",
  "image2": "https://images.unsplash.com/photo-1607582278038-6a6a65cbd1e1?w=400&h=400&fit=crop&q=60",
  "image3": "https://images.unsplash.com/photo-1607582278038-6a6a65cbd1e1?w=400&h=400&fit=crop&q=60",
  "description": "Keeps drinks cold for 24 hours or hot for 12 hours. BPA-free stainless steel.",
  "inventory": 58,
  "category": "Accessories",
  "brand": "HydroFlask"
},
  {
    id: 7,
    name: "Eco-Friendly Yoga Mat",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop&q=80",
    image1: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop&q=60",
    image2: "https://images.unsplash.com/photo-1599447373055-6b1e0b2a2da7?w=400&h=400&fit=crop&q=60",
    image3: "https://images.unsplash.com/photo-1613417236325-1b6b69e5e7c6?w=400&h=400&fit=crop&q=60",
    description: "Sustainable yoga mat with extra grip and cushioning. Ideal for yoga, stretching, and meditation.",
    inventory: 35,
    category: "Sports & Fitness",
    brand: "ZenFlow"
  },
 {
  "id": 8,
  "name": "Travel French Press",
  "price": 39.99,
  "image": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=400&h=400&fit=crop&q=80",
  "image1": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=400&h=400&fit=crop&q=60",
  "image2": "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=400&fit=crop&q=60",
  "image3": "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=400&fit=crop&q=60",
  "description": "Stainless steel french press that's perfect for travel and camping.",
  "inventory": 42,
  "category": "Kitchen",
  "brand": "BrewGo"
},
 {
  "id": 9,
  "name": "Minimalist Leather Wallet",
  "price": 45.99,
  "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&q=80",
  "image1": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&q=60",
  "image2": "https://images.unsplash.com/photo-1594046243097-78777d7f5e8b?w=400&h=400&fit=crop&q=60",
  "image3": "https://images.unsplash.com/photo-1594046243097-78777d7f5e8b?w=400&h=400&fit=crop&q=60",
  "description": "Handcrafted full-grain leather wallet with RFID protection. Holds 6-8 cards.",
  "inventory": 39,
  "category": "Accessories",
  "brand": "LeatherCraft"
}
];

// Helper function to find product by ID
const findProductById = (productId) => {
  return staticProducts.find(product => product.id === parseInt(productId));
};

// Get cart items
const getCart = async (req, res) => {
  try {
    console.log('GET /api/cart called');
    
    let cart = await Cart.findOne({ sessionId: 'default-session' });
    
    if (!cart) {
      console.log('No cart found, creating new cart');
      cart = new Cart({ sessionId: 'default-session', items: [] });
      await cart.save();
    }
    
    console.log('Cart found with', cart.items.length, 'items');
    
    // Populate product details for cart items using static data
    const cartItems = [];
    for (const item of cart.items) {
      const product = findProductById(item.productId);
      if (product) {
        cartItems.push({
          productId: item.productId,
          quantity: item.quantity,
          product: product
        });
      } else {
        console.log(`Product with ID ${item.productId} not found in static data`);
      }
    }
    
    // Calculate totals
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    console.log(`Returning cart with ${cartItems.length} items, total: $${totalPrice.toFixed(2)}`);
    
    res.json({
      items: cartItems,
      totalItems: totalItems,
      totalPrice: parseFloat(totalPrice.toFixed(2))
    });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ 
      error: 'Failed to fetch cart', 
      message: error.message 
    });
  }
};

// Add item to cart
const addToCart = async (req, res) => {
  try {
    console.log('POST /api/cart/add called with body:', req.body);
    
    const { productId, quantity = 1 } = req.body;
    
    // Validate input
    if (!productId) {
      console.log('Error: Product ID is required');
      return res.status(400).json({ error: 'Product ID is required' });
    }
    
    if (quantity < 1) {
      console.log('Error: Quantity must be at least 1');
      return res.status(400).json({ error: 'Quantity must be at least 1' });
    }
    
    // Validate product exists in static data
    const product = findProductById(productId);
    if (!product) {
      console.log(`Error: Product not found with ID: ${productId}`);
      return res.status(404).json({ error: 'Product not found' });
    }
    
    console.log(`Product found: ${product.name}, Available inventory: ${product.inventory}`);
    
    // Check inventory
    if (product.inventory < quantity) {
      console.log(`Error: Insufficient inventory. Requested: ${quantity}, Available: ${product.inventory}`);
      return res.status(400).json({ 
        error: 'Insufficient inventory', 
        available: product.inventory 
      });
    }
    
    // Find or create cart
    let cart = await Cart.findOne({ sessionId: 'default-session' });
    if (!cart) {
      console.log('Creating new cart');
      cart = new Cart({ sessionId: 'default-session', items: [] });
    }
    
    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
      item => item.productId === parseInt(productId)
    );
    
    if (existingItemIndex > -1) {
      console.log('Item already exists in cart, updating quantity');
      // Update quantity
      const currentQuantity = cart.items[existingItemIndex].quantity;
      const newQuantity = currentQuantity + parseInt(quantity);
      
      // Check inventory for total quantity
      if (product.inventory < newQuantity) {
        console.log(`Error: Insufficient inventory for total quantity. New total: ${newQuantity}, Available: ${product.inventory}`);
        return res.status(400).json({ 
          error: 'Insufficient inventory for total quantity', 
          available: product.inventory,
          currentInCart: currentQuantity
        });
      }
      
      cart.items[existingItemIndex].quantity = newQuantity;
      console.log(`Updated quantity from ${currentQuantity} to ${newQuantity}`);
    } else {
      console.log('Adding new item to cart');
      // Add new item
      cart.items.push({ 
        productId: parseInt(productId), 
        quantity: parseInt(quantity) 
      });
    }
    
    await cart.save();
    console.log('Cart saved successfully');
    
    // Calculate total items
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    console.log(`Cart now has ${totalItems} total items`);
    
    res.json({ 
      message: 'Item added to cart successfully',
      totalItems: totalItems,
      productName: product.name
    });
  } catch (error) {
    console.error('Error adding to cart:', error);
    console.error('Stack trace:', error.stack);
    res.status(500).json({ 
      error: 'Failed to add item to cart', 
      message: error.message 
    });
  }
};

// Update cart item quantity
const updateCartItem = async (req, res) => {
  try {
    console.log('PUT /api/cart/update called with body:', req.body);
    
    const { productId, quantity } = req.body;
    
    // Validate input
    if (!productId) {
      console.log('Error: Product ID is required');
      return res.status(400).json({ error: 'Product ID is required' });
    }
    
    if (quantity === undefined || quantity === null) {
      console.log('Error: Quantity is required');
      return res.status(400).json({ error: 'Quantity is required' });
    }
    
    if (quantity < 1) {
      console.log('Error: Quantity must be at least 1');
      return res.status(400).json({ error: 'Quantity must be at least 1' });
    }
    
    // Validate product exists in static data
    const product = findProductById(productId);
    if (!product) {
      console.log(`Error: Product not found with ID: ${productId}`);
      return res.status(404).json({ error: 'Product not found' });
    }
    
    console.log(`Product found: ${product.name}, Available inventory: ${product.inventory}`);
    
    // Check inventory
    if (product.inventory < quantity) {
      console.log(`Error: Insufficient inventory. Requested: ${quantity}, Available: ${product.inventory}`);
      return res.status(400).json({ 
        error: 'Insufficient inventory', 
        available: product.inventory 
      });
    }
    
    let cart = await Cart.findOne({ sessionId: 'default-session' });
    if (!cart) {
      console.log('Error: Cart not found');
      return res.status(404).json({ error: 'Cart not found' });
    }
    
    const itemIndex = cart.items.findIndex(item => item.productId === parseInt(productId));
    if (itemIndex === -1) {
      console.log(`Error: Item with productId ${productId} not found in cart`);
      return res.status(404).json({ error: 'Item not found in cart' });
    }
    
    console.log(`Updating item quantity from ${cart.items[itemIndex].quantity} to ${quantity}`);
    
    cart.items[itemIndex].quantity = parseInt(quantity);
    await cart.save();
    
    // Calculate total items
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    console.log(`Updated item quantity to ${quantity}, total items: ${totalItems}`);
    
    res.json({ 
      message: "Cart updated successfully",
      totalItems: totalItems
    });
  } catch (error) {
    console.error('Error updating cart:', error);
    console.error('Stack trace:', error.stack);
    res.status(500).json({ 
      error: 'Failed to update cart', 
      message: error.message 
    });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log('DELETE /api/cart/remove called for productId:', productId);
    
    // Validate input
    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }
    
    let cart = await Cart.findOne({ sessionId: 'default-session' });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    
    // Check if item exists in cart
    const itemExists = cart.items.some(item => item.productId === parseInt(productId));
    if (!itemExists) {
      return res.status(404).json({ error: 'Item not found in cart' });
    }
    
    // Get product name for response
    const product = findProductById(productId);
    const productName = product ? product.name : 'Unknown Product';
    
    // Remove item from cart
    cart.items = cart.items.filter(item => item.productId !== parseInt(productId));
    await cart.save();
    
    // Calculate total items
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    console.log(`Removed item ${productName}, total items now: ${totalItems}`);
    
    res.json({ 
      message: 'Item removed from cart',
      totalItems: totalItems,
      productName: productName
    });
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ 
      error: 'Failed to remove item from cart', 
      message: error.message 
    });
  }
};

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart
};