define(['framework/dumafajees/base/models/baseCompoundModel'], function(CompoundModel) {
  return CompoundModel.extend({
    defaults: _.extend({}, CompoundModel.prototype.defaults, {
      dumafajeeId:"Region.Header"
    })
  });
});