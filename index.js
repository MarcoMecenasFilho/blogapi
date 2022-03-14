require('dotenv').config();

const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const { categoryRouter, loginRouter,
  postBlogRouter, userRouter } = require('./routers');

const app = express();
app.use(express.json());


app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/post', postBlogRouter);
app.use('/categories', categoryRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
