define(function(require){
  var Backbone = require('backbone');
  var DisplayPropertiesCollection = require('./displayPropertiesCollection');

  return Backbone.Model.extend({
    defaults: {
      dumafajeeId:'Rythym.Base',
      type:'simple',
    },
    initialize: function(){
      this.set('displayProperties', new DisplayPropertiesCollection([
        {
          disabled: true,
          long: true,
          display:"Description"
        }
      ]));
    }
  });
});