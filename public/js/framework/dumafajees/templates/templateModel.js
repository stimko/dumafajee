define(['framework/dumafajees/base/models/baseCompoundModel'], function(BaseCompoundModel) {
  return BaseCompoundModel.extend({
    defaults: _.extend({}, BaseCompoundModel.prototype.defaults, {
      dumafajeeId:"Template"
    })
  });
});