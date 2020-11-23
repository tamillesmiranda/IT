const express = require('express')
  , path = require('path')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , mongoose = require("mongoose")
  , jsonwebtoken = require("jsonwebtoken");

const cors = require('cors')
const usuario = require('./routes/usuario')
const login = require('./routes/login')
const consumidores = require('./routes/consumidores')
const fornecedores = require('./routes/fornecedores')

const app = express();
app.use(cors())
mongoose.connect(
  "mongodb://localhost:27017/projeto",
  {
    useNewUrlParser: true
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

//ROUTES
app.use('/', login);
app.use('/usuarios', usuario);
app.use('/consumidores', consumidores);
app.use('/fornecedores', fornecedores);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;