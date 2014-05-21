define(['../../base/models/baseCompoundModel', '../regionTypes'], function(BaseCompoundModel, RegionTypes) {
  return BaseCompoundModel.extend({
    defaults: _.extend({}, BaseCompoundModel.prototype.defaults, {
      type: RegionTypes.DEFAULT
    })
  });
});