import { Router } from 'express';
import path from 'node:path';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategories';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';

const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// LIST CATEGORIES
router.get('/categories', listCategories);

// CREATE CATEGORY
router.post('/categories', createCategory);

// LIST PRODUCTS
router.get('/products', listProducts);

// CREATE PRODUCTY
router.post('/products', upload.single('image'), createProduct);

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
