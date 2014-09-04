var http = require('http');

module.exports = {
  build:function(req, postRes){
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
  }
}