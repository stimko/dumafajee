var Dumafajee = require('../models/dumafajee');

module.exports = {
  get:function(req, res) {
    Dumafajee.find({}, function(err, available){
      res.send(available[0]);
    });
  }
}