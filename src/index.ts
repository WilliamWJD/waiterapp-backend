import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(`${process.env.MONGO_URL}`)
  .then(() => {
    app.listen(3333, () => {
      console.log('Servidor online');
    });
  })
  .catch(() => console.log('erro ao conectar no mongo'));

