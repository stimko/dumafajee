define(function(require) {
  var Backbone = require('Backbone'); 
  var Registry = require('framework/registry');

  return Backbone.Collection.extend({
    model: function(attrs, opts){
      opts.parse = true;
      return new Registry[attrs.dumafajeeId+'Model'](attrs, opts);
    }
  });
});