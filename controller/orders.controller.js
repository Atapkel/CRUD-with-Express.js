const Order = require('../models/order.model.js');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search orders by customer_id and status
exports.searchOrders = async (req, res) => {
  try {
    const { customer_id, status } = req.body;
    const query = {};
    if (customer_id !== undefined) query.customer_id = customer_id;
    if (status !== undefined) query.status = status;

    const orders = await Order.find(query);
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update order by ID
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
