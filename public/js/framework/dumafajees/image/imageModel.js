define(function(require) {
  var BaseModel = require('framework/dumafajees/base/models/baseModel'); 
  var ModelIds = require('framework/registry/model/modelIds');
  
  return BaseModel.extend({
    defaults: _.extend({}, BaseModel.prototype.defaults, {
      dumafajeeId: ModelIds.IMAGE,
      source:"source"
    })
  });
});