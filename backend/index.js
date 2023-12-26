import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import apiroutes from './routes/url.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
});

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api",apiroutes);

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});