var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var compress = require('compression');
var errorHandler = require('errorhandler');
var path = require('path');
var app = express();

app.set('port', 2000);
//app.use(bodyParser());
//app.use(methodOverride());
//app.use(compress());
app.use(express.static(path.join(__dirname, '/public')));
app.use(errorHandler());

app.get('/availableDumafajees', function(req, res) {
  res.json({
  "dumafajeeId": "Compound.GroupPanel",
  "items": [
    {"dumafajeeId":"Button.SimpleButton",
      "description": "sdfsdfsdf",
      "dataId":"Button.SimpleButton",
      "draggable": true,
      "content": "SimpleButton"
    },
    {
      "dumafajeeId":"Button.DropDownButton",
      "dataId":"Button.DropDownButton",
      "draggable": true,
      "content": "Drop Down Button"
    },
    {
      "dumafajeeId":"Toolbar.Horizontal",
      "draggable": true,
      "dataId":"Toolbar.Horizontal",
      "type": "compound"
    }
  ]});
});

http.createServer(app).listen(app.get( 'port'), function() {
  console.log('Port: ' + app.get('port'));
});