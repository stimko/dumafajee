define(['Backbone', './baseModel'], function(Backbone, BaseModel) {
  return Backbone.Collection.extend({
    model:BaseModel
  });
});