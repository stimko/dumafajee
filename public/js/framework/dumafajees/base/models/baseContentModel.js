define(function(require){
  var BaseModel = require('./baseModel');

  return BaseModel.extend({
    defaults: _.extend({}, BaseModel.prototype.defaults, {
      content:'default',
      type: 'content'
    })
  });
});