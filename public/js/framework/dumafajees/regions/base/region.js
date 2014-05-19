define(['../../base/models/baseCompoundModel', '../regionTypes'], function(BaseCompoundModel, RegionTypes) {
  return BaseCompoundModel.extend({
    type: RegionTypes.DEFAULT
  });
});