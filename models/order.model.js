const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_id: {
    type: Number,
    required: true,
    unique: true
  },
  customer_id: {
    type: Number,
    required: true
  },
  order_date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'shipped', 'delivered', 'cancelled'] 
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
