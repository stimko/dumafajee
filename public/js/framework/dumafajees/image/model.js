define(['framework/dumafajees/base/models/baseModel'], function(BaseModel) {
  return BaseModel.extend({
    defaults: _.extend({}, BaseModel.prototype.defaults, {
      dumafajeeId: "Image",
      source:"source"
    })
  });
});