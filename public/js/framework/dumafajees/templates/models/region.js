define(['../base/baseModel', './regionTypes'], function(Base, RegionTypes) {
  return Base.extend({
    defaults: {
      type: RegionTypes.DEFAULT
    }
  });
});