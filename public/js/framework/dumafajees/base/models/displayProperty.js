define(function(require){
  var Backbone = require('backbone');
  
  return Backbone.Model.extend({
    defaults: {
      value:"",
      disabled: false,
      long: false,
      display:"default"
    }
  });
});