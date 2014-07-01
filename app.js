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
  "type":"compound",
  "items": [
    {
      "dumafajeeId":"Compound.SimplePanel",
      "items":[
        {
          "dumafajeeId":"Text.Label",
          "content":"Simple Button",
          "type": "simple"
        }
      ],
      "draggable": true,
      "dataId":"Button.SimpleButton",
      "dataType":"simple",
      "type": "compound"
    },
    {
      "dumafajeeId":"Compound.SimplePanel",
      "items":[
        {
          "dumafajeeId":"Text.Label",
          "content":"Toolbar",
          "type": "simple"
        }
      ],
      "draggable": true,
      "dataId":"Toolbar.Horizontal",
      "dataType":"compound",
      "type": "compound"
    },
    {
      "dumafajeeId":"Compound.SimplePanel",
      "items":[
        {
          "dumafajeeId":"Text.Label",
          "content":"Label",
          "type": "simple"
        }
      ],
      "draggable": true,
      "dataId":"Text.Label",
      "dataType":"simple",
      "type": "compound"
    }, 
    {
      "dumafajeeId":"Compound.SimplePanel",
      "items":[
        {
          "dumafajeeId":"Text.Label",
          "content":"Header",
          "type": "simple"
        }
      ],
      "draggable": true,
      "dataId":"Region.Header",
      "dataType":"compound",
      "type": "compound"
    },
    {
      "dumafajeeId":"Compound.SimplePanel",
      "items":[
        {
          "dumafajeeId":"Text.Label",
          "content":"Content",
          "type": "simple"
        }
      ],
      "draggable": true,
      "dataId":"Region.Content",
      "dataType":"compound",
      "type": "compound"
    }
  ]
  });
});

http.createServer(app).listen(app.get( 'port'), function() {
  console.log('Port: ' + app.get('port'));
});