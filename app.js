var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var compress = require('compression');
var errorHandler = require('errorhandler');
var path = require('path');
var app = express();

app.set('port', 3000);
//app.use(bodyParser());
//app.use(methodOverride());
//app.use(compress());
app.use(express.static(path.join(__dirname, '/public')));
app.use(errorHandler());

app.get( '/', function(req, res, next, err) {
    res.status(200).send('index.html');
});

http.createServer( app ).listen( app.get( 'port' ), function() {
  console.log('Port: ' + app.get('port'));
});