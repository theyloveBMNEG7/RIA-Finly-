const express = require('express');
const morgan = require('morgan');
const path = require('path');
const userRouter = require('./routes/user.route');
const session = require('express-session');


require('dotenv').config();
require('./libs/dbConnect');
const app = express(); 

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './views');
app.set('view engine', 'ejs');

  app.use(morgan('dev'));

  app.use(express.static('./public'));
  app.use(express.urlencoded({ extended: false}));
  app.use( session({
    secret: process.env.AUTH_SECRET,
    saveUninitialized: true,
    resave: false,
  })
);

  app.use('/', userRouter);

  app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found'});
});

const PORT =3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});