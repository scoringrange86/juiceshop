import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

connectDB();

const app = express();

app.use(json());

app.use('/api/products',productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server running on port ' + PORT));