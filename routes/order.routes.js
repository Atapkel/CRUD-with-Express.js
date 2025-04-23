const express = require('express');
const router = express.Router();
const ordersController = require('../controller/orders.controller.js');

router.post('/api/orders', ordersController.createOrder);
router.get('/api/orders', ordersController.getAllOrders);
router.post('/api/search', ordersController.searchOrders);
router.put('/api/orders/:id', ordersController.updateOrder);
router.delete('/api/orders/:id', ordersController.deleteOrder);

module.exports = router;
