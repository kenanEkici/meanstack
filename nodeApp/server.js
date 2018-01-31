//declaring dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//set public accessable files
app.use(express.static('public'))

//set html renderer
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//set parser
//app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

//set routes
var routes = require('./api/routes/routes');
routes(app);

//start server
app.listen(port);
console.log("API started on port " + port );