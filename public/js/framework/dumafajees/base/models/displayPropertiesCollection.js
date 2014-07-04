define(function(require) {
  var Backbone = require('Backbone'); 
  var DisplayProperty = require('./displayProperty');

  return Backbone.Collection.extend({
    model: DisplayProperty
  });
});