define(function(require) {
  var BaseModel = require('../../base/models/baseModel');
  var DumafajeeIds = require('framework/dumafajeeIds');

  return BaseModel.extend({
    defaults: _.extend({}, BaseModel.prototype.defaults, {
      dumafajeeId: DumafajeeIds.SIMPLE_BUTTON,
      content:"Simple"
    })
  });
});