import { Router } from 'express';

const router = Router();

// LIST CATEGORIES
router.get('/categories', (req, res) => {
  res.send('ok');
});

// CREATE CATEGORY
router.post('/categories', (req, res) => {
  res.send('ok');
});

// LIST PRODUCTS
router.get('/products', (req, res) => {
  res.send('ok');
});

// CREATE PRODUCTY
router.post('/products', (req, res) => {
  res.send('ok');
});

// LIST PRODUCTS BY CATEGORY
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('ok');
});

// LIST ORDERS
router.get('/orders', (req, res) => {
  res.send('ok');
});

// CREATE ORDER
router.post('/orders', (req, res) => {
  res.send('ok');
});

// CHANGE ORDER STATUS
router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});

// DELETE/CANCEL ORDER
router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});

export { router };
