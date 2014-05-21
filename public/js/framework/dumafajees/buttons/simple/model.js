define(['../../base/models/baseModel'], function(BaseModel) {
  return BaseModel.extend({
    defaults: _.extend({}, BaseModel.prototype.defaults, {
      dumafajeeId: "Button.SimpleButton",
      label:"Simple"
    })
  });
});