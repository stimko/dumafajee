define(function(require){
  var BaseCollectionModel = require('../../base/models/baseCollectionModel');
  var SimpleButtonModel = require('./simple/model');
  
  return BaseCollectionModel.extend({
    model:SimpleButtonModel
  });
});