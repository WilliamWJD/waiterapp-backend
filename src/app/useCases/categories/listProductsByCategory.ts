import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const products = await Product.find().where('category').equals(categoryId);
    return res.status(201).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error!' });
  }
}