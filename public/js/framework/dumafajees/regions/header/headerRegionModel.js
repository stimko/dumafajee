define(['../base/region', '../regionTypes'], function(RegionModel, RegionTypes) {
  return RegionModel.extend({
    defaults: {
      type: RegionTypes.HEADER
    }
  });
});