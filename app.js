var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var compress = require('compression');
var errorHandler = require('errorhandler');
var path = require('path');
var app = express();
var querystring = require('querystring');

app.set('port', 2000);
app.use(bodyParser());
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, '/public')));
app.use(errorHandler());

app.post('/build', function(req, postRes){
  var data = JSON.stringify(req.body);
  var options = {
    host: 'localhost',
    port: 7000,
    path: '/build',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
  };
  var buildRequest = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    postRes.writeHead(200);
    postRes.end();
  });
  buildRequest.write(data);
  buildRequest.end();
});

app.get('/availableDumafajees', function(req, res) {
  res.json({
  "dumafajeeId": "Compound.GroupPanel",
  "type":"compound",
  "items": [
    {
      "dumafajeeId":"Compound.SimplePanel",
      "items":[
        {
          "dumafajeeId":"Text.Label",
          "content":"Simple Button",
        }
      ],
      "dataId":"Button.SimpleButton",
      "path":"framework/dumafajees/buttons/simple/simpleButtonView",
      "dataType":"content",
      "type": "compound"
    },
    {
      "dumafajeeId":"Compound.SimplePanel",
      "items":[
        {
          "dumafajeeId":"Text.Label",
          "content":"Toolbar"
        }
      ],
      "dataId":"Toolbar.Horizontal",
      "path":"framework/dumafajees/toolbars/horizontal/horizontalToolbarView",
      "dataType":"compound",
      "type": "compound"
    },
    {
      "dumafajeeId":"Compound.SimplePanel",
      "items":[
        {
          "dumafajeeId":"Text.Label",
          "content":"Label"
        }
      ],
      "dataId":"Text.Label",
      "path":"framework/dumafajees/text/label/labelView",
      "dataType":"content",
      "type": "compound"
    },
    {
      "dumafajeeId":"Compound.SimplePanel",
      "items":[
        {
          "dumafajeeId":"Text.Label",
          "content":"Header"
        }
      ],
      "dataId":"Region.Header",
      "path":"framework/dumafajees/regions/header/headerRegionView",
      "dataType":"compound",
      "type": "compound"
    }
  ]
  });
});

http.createServer(app).listen(app.get( 'port'), function() {
  console.log('Port: ' + app.get('port'));
});