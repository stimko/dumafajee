define(function(require) {
  var BaseModel = require('framework/dumafajees/base/models/baseModel'); 
  var DumafajeeIds = require('framework/dumafajeeIds');
  
  return BaseModel.extend({
    defaults: _.extend({}, BaseModel.prototype.defaults, {
      dumafajeeId: DumafajeeIds.IMAGE,
      source:"source"
    })
  });
});