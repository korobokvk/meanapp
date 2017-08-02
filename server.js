const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/index');
const bluebird = require('bluebird');
const authRoute = require('./routes/auth');

import errorHandler from './middlewares/errorHandler'
import checkToken from './middlewares/chekToken';
import userRoutes from './routes/user';
import getUser from './middlewares/GetUser';
import pageRoute from './routes/page';

const app = express();

mongoose.Promise = bluebird;
mongoose.connect(config.database, err => {
  if (err) throw  err;

  console.log('Mongo is connected')
});

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', authRoute);
app.use('/api', checkToken, userRoutes);
app.use(getUser);
app.use('/api', checkToken, pageRoute);

app.get("/", async(req, res) => {
  path.join(__dirname, 'dist/index.html')
});

app.listen(config.port, err => {
  if (err) throw err;

  console.log(`App live on port ${config.port}`)
});

app.use(errorHandler);
