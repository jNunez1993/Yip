var express = require('express');
var mongoose= require('mongoose');
var bodyParser=require('body-parser');
var http=require('http');
var db=mongoose.connect('mongodb://localhost:27017/yip');
var app = express();
var Schema= mongoose.Schema;




app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.listen(3000);