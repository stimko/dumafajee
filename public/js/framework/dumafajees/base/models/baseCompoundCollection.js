define(['Backbone', 'framework/marionetteApp'], function(Backbone, MarionetteApp) {
  return Backbone.Collection.extend({
    model: function(attrs, opts){
      opts.parse = true;
      return new MarionetteApp.Registry[attrs.dumafajeeId+'Model'](attrs, opts);
    }
  });
});