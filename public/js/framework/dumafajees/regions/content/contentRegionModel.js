define(function(require){
  var BaseCompoundModel = require('framework/dumafajees/base/models/baseCompoundModel');

  return BaseCompoundModel.extend({
    defaults:_.extend({}, BaseCompoundModel.prototype.defaults, {
      usedIds:{},
      routes:{}
    })
  });
});