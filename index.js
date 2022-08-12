import dotenv from 'dotenv'
import mongoose from 'mongoose';
import app from './app'

dotenv.config();

const port = process.env.PORT || 3000;
const URL = process.env.DATABASE_URL

mongoose.connect(URL, (error) => {
  if (error) {
    console.log('Database error: ', error);
  } else {
    console.log('Database connected');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
});
