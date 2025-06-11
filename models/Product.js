const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true
  },

  image1: {
    type: String,
    required: false
  },
  image2: {
    type: String,
    required: false
  },
  image3: {
    type: String,
    required: false
  },

  description: {
    type: String,
    required: true
  },
  inventory: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

productSchema.index({ name: 1 });
productSchema.index({ price: 1 });
productSchema.index({ id: 1 });

module.exports = mongoose.model('Product', productSchema);