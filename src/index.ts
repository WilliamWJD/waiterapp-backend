import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import * as dotenv from 'dotenv';

import { router } from './routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

mongoose.connect(`${process.env.MONGO_URL}`)
  .then(() => {
    app.listen(3333, () => {
      console.log('Servidor online');
    });
  })
  .catch(() => console.log('erro ao conectar no mongo'));

