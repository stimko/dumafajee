define(['Backbone', 'framework/marionetteApp'], function(Backbone, MarionetteApp) {
  return Backbone.Collection.extend({
    model: function(attrs, opts){
      return new MarionetteApp.Registry[attrs.id+'Model'](attrs, opts);
    }
  });
});