const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');
const app = express();

mongoose.connect('mongodb+srv://test123:test123@devconnector-8a5we.mongodb.net/node-angular?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then((message)=>{
  console.log('Db Connected');

}).catch((err)=>{
  console.log('Connection Failed '+err.message);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use( (req, res, next) =>{
res.setHeader("Access-Control-Allow-Origin","*");
res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept ");
res.setHeader("Access-Control-Allow-Methods",
"GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
}
);
app.use('/api/posts',postRoutes);

module.exports = app;
