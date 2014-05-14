define(['../base/models/baseModel', './regionTypes'], function(Base, RegionTypes) {
  return Base.extend({
    defaults: {
      regions: []
    }
  });
});