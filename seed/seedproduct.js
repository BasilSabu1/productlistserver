const mongoose = require('mongoose');
const Product = require('./models/Product'); // Make sure path is correct
require('dotenv').config();

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    inventory: 25,
    category: "Electronics",
    brand: "AudioTech"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Comfortable 100% organic cotton t-shirt available in multiple colors. Sustainable and eco-friendly fashion choice.",
    inventory: 50,
    category: "Clothing",
    brand: "EcoWear"
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop",
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity. Track your health goals.",
    inventory: 15,
    category: "Electronics",
    brand: "FitTech"
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug Set",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop",
    description: "Set of 4 handcrafted ceramic mugs perfect for your morning coffee. Dishwasher and microwave safe.",
    inventory: 30,
    category: "Home & Kitchen",
    brand: "CeramicCraft"
  },
  {
    id: 5,
    name: "Professional Camera Lens",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
    description: "High-quality 50mm prime lens for professional photography. Sharp images with beautiful bokeh effect.",
    inventory: 8,
    category: "Photography",
    brand: "LensMaster"
  },
  {
    id: 6,
    name: "Yoga Mat Premium",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    description: "Non-slip premium yoga mat with excellent cushioning. Perfect for yoga, pilates, and home workouts.",
    inventory: 40,
    category: "Sports & Fitness",
    brand: "YogaZen"
  },
  {
    id: 7,
    name: "Leather Crossbody Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Stylish genuine leather crossbody bag with multiple compartments. Perfect for daily use and travel.",
    inventory: 20,
    category: "Fashion",
    brand: "LeatherCraft"
  },
  {
    id: 8,
    name: "Portable Phone Charger",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1609592806874-7d2d4c156e14?w=400&h=400&fit=crop",
    description: "High-capacity portable battery pack with fast charging capability. Keep your devices powered all day.",
    inventory: 35,
    category: "Electronics",
    brand: "PowerBank Pro"
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    const connection = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB:', connection.connection.name);
    
    // Check current products
    const currentCount = await Product.countDocuments();
    console.log(`Current products in database: ${currentCount}`);
    
    // Clear existing products
    const deleteResult = await Product.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} existing products`);
    
    // Insert new products
    const insertResult = await Product.insertMany(products);
    console.log(`Successfully inserted ${insertResult.length} products`);
    
    // Verify insertion
    const newCount = await Product.countDocuments();
    console.log(`Total products after seeding: ${newCount}`);
    
    // Show sample of inserted data
    const sampleProducts = await Product.find().limit(3);
    console.log('Sample inserted products:', sampleProducts.map(p => ({ id: p.id, name: p.name })));
    
    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
};

// Handle process termination
process.on('SIGINT', async () => {
  console.log('Received SIGINT, closing database connection...');
  await mongoose.connection.close();
  process.exit(0);
});

seedDatabase();
