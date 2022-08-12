import express from 'express'
import router from './src/routes/index'
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello world');
});

app.use(router);

export default app