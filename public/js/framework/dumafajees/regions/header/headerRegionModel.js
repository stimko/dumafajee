define(['../base/baseRegionModel'], function(RegionModel) {
  return RegionModel.extend({
    defaults: _.extend({}, RegionModel.prototype.defaults, {
      dumafajeeId:"Region.Header"
    })
  });
});