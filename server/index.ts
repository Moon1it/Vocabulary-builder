require('dotenv').config();

import express from 'express';
import morgan from 'morgan';
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const mainRouter = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 6123;

// Экземпляр приложения с помощью express
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
   cors({
      credentials: true,
      origin: process.env.CLIENT_URL,
   })
);
app.use('/api', mainRouter);
app.use(errorMiddleware);

const start = async () => {
   try {
      await mongoose.connect(process.env.DB_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
   } catch (e) {
      console.log('error', e);
   }
};

start();
