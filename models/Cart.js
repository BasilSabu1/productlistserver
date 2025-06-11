const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  }
});

const cartSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true,
    default: 'default-session'
  },
  items: [cartItemSchema]
}, {
  timestamps: true
});

// Virtual for total items
cartSchema.virtual('totalItems').get(function() {
  return this.items.reduce((total, item) => total + item.quantity, 0);
});

// Virtual for total price (note: this requires product lookup in controller)
cartSchema.virtual('totalPrice').get(function() {
  // This will be calculated in the controller with product prices
  return 0;
});

// Ensure virtual fields are serialized
cartSchema.set('toJSON', { virtuals: true });

// Index for efficient queries
cartSchema.index({ sessionId: 1 });

module.exports = mongoose.model('Cart', cartSchema);