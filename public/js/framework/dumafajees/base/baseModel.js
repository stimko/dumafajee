define(['Backbone', './defaults'], function(Backbone, defaults){
  return Backbone.Model.extend({
    defaults: defaults
  });
});