define(function(require) {
  var Backbone = require('Backbone'); 
  var ModelRegistry = require('framework/registry/model/modelRegistry');

  return Backbone.Collection.extend({
    model: function(attrs, opts){
      opts.parse = true;
      var constructor = ModelRegistry.get(attrs.dumafajeeId+'.Model', attrs.type);
      return new constructor(attrs, opts);
    }
  });
});