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

app.get('/dumafajee', function(req, res) {
  res.json({
  "dumafajeeId": "Compound.GroupPanel",
  "items": [
    {"dumafajeeId":"Compound.SimplePanel",
      "description": "sdfsdfsdf",
      "draggable":true,
      "dataId":"Button.SimpleButton",
      "items":[
        {"dumafajeeId":"Image",
          "source":"simplebuttonImage"
        },
        {"dumafajeeId":"Text.Label",
          "content": "Simple button!!"
        }
      ]
    },
    {
      "dumafajeeId":"Compound.SimplePanel",
      "draggable":true,
      "dataId":"Button.DropDownButton",
      "items":[
        {"dumafajeeId":"Image",
          "source":"dropDownButtonImage"
        },
        {"dumafajeeId":"Text.Label",
          "content": "Drop Down button!!"
        }
      ]
    }
  ]});
});

http.createServer(app).listen(app.get( 'port'), function() {
  console.log('Port: ' + app.get('port'));
});