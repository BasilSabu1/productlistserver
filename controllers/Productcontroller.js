const Product = require('../models/Product');

// Static products data
const staticProducts = [
  {
    id: 1,
    name: "Noise-Cancelling Over-Ear Headphones",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80",
    image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=60",
    image2: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop&q=60",
    image3: "https://images.unsplash.com/photo-1590658268034-35ef5949a3f3?w=400&h=400&fit=crop&q=60",
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

// Get all products with pagination and sorting
const getProducts = async (req, res) => {
  try {
    // Log the request
    console.log('GET /api/products called with query:', req.query);
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const sort = req.query.sort || '';
    
    const skip = (page - 1) * limit;
    
    // Sort the static products based on sort parameter
    let sortedProducts = [...staticProducts];
    
    switch (sort) {
      case 'price-low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sortedProducts.sort((a, b) => a.id - b.id);
    }
    
    console.log('Sort parameter:', sort);
    console.log('Skip:', skip, 'Limit:', limit);
    
    const totalProducts = staticProducts.length;
    console.log('Total products available:', totalProducts);
    
    if (totalProducts === 0) {
      console.log('No products found');
      return res.json({
        products: [],
        pagination: {
          page,
          limit,
          totalProducts: 0,
          totalPages: 0,
          hasNextPage: false,
          hasPrevPage: false
        }
      });
    }
    
    // Apply pagination to sorted products
    const paginatedProducts = sortedProducts.slice(skip, skip + limit);
    
    console.log(`Found ${paginatedProducts.length} products for page ${page}`);
    
    const totalPages = Math.ceil(totalProducts / limit);
    
    const result = {
      products: paginatedProducts,
      pagination: {
        page,
        limit,
        totalProducts,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    };
    
    console.log('Sending response with', result.products.length, 'products');
    res.json(result);
    
  } catch (error) {
    console.error('Error fetching products:', error);
    console.error('Stack trace:', error.stack);
    res.status(500).json({ 
      error: 'Failed to fetch products', 
      message: error.message 
    });
  }
};

// Get single product by ID
const getProductById = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    console.log('Looking for product with ID:', productId);
    
    const product = staticProducts.find(p => p.id === productId);
    
    if (!product) {
      console.log('Product not found with ID:', productId);
      return res.status(404).json({ error: 'Product not found' });
    }
    
    console.log('Found product:', product.name);
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ 
      error: 'Failed to fetch product', 
      message: error.message 
    });
  }
};

module.exports = {
  getProducts,
  getProductById
};