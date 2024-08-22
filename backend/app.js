const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require("cors")
const profileRoutes = require('./routes/profileRoutes');


app.options('*', cors()); // Preflight requests

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/', require('./routes/auth'));

app.use('/api', profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

