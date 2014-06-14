define(function(require) {
  var Backbone = require('Backbone'); 
  var Registry = require('framework/registry');

  return Backbone.Collection.extend({
    model: function(attrs, opts){
      opts.parse = true;
      var constructor = Registry.get([attrs.dumafajeeId+'Model']);
      return new constructor(attrs, opts);
    }
  });
});