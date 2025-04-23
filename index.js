const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const ordersRoutes = require('./routes/order.routes.js');

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use(ordersRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error.message);
});
