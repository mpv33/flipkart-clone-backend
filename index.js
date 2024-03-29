import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import DefaultData from './default.js'

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;
const db = process.env.DB_URI;
Connection(db);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  res.send('flipkart clone  API running');
});

app.use('/api', userRoutes);
app.use('/api', productRoutes);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
//DefaultData()