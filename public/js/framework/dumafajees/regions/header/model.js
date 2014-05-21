define(['../base/region', '../regionTypes'], function(RegionModel, RegionTypes) {
  return RegionModel.extend({
    defaults: _.extend({}, RegionModel.prototype.defaults, {
      dumafajeeId:"Region.Header"
    })
  });
});