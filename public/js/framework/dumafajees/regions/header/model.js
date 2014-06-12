define(['../base/region'], function(RegionModel) {
  return RegionModel.extend({
    defaults: _.extend({}, RegionModel.prototype.defaults, {
      dumafajeeId:"Region.Header"
    })
  });
});