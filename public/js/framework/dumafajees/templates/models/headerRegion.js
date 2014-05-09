define(['./region', './regionTypes'], function(RegionModel, RegionTypes) {
  return RegionModel.extend({
    defaults: {
      type: RegionTypes.HEADER,
      items: []
    }
  });
});