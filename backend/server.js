const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Simple in-memory product list
const products = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Phone', price: 400 },
  { id: 3, name: 'Headphones', price: 100 }
];

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
