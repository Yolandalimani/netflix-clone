import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Enable CORS for all origins or restrict it to 'http://localhost:3000'
app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests only from this origin
  }));

app.get('/', (req, res) => {
    res.send('Hello, world! Welcome to the Netflix Clone!');
  });

app.get('/api/data', (req, res) => {
res.json({ message: 'This is some data from the server!' });
});
// app.use(cors());
app.use(express.json());

export default app;