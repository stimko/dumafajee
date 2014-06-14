define(function(require){
  var BaseCollectionModel = require('../../base/models/baseCollectionModel');
  var SimpleButtonModel = require('./simple/simpleButtonModel');
  
  return BaseCollectionModel.extend({
    model:SimpleButtonModel
  });
});