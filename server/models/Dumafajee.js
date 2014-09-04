var mongoose = require('mongoose');

var Dumafajee = mongoose.Schema({
  dumafajeeId: {
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  dataId:{
    type: String
  },
  path: {
    type: String
  },
  dataType:{
    type: String
  },
  items: [Dumafajee]
});

module.exports = mongoose.model('Dumafajee', Dumafajee);
