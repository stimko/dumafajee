define(function(require){
  var Backbone = require('backbone');
  var DisplayPropertiesCollection = require('./displayPropertiesCollection');

  return Backbone.Model.extend({
    defaults: {
      dumafajeeId:'Rythym.Base',
      type:'simple',
    },
    initialize: function(){
      if (!this.get('displayProperties')) {
        this.set('displayProperties', new DisplayPropertiesCollection([
          {
            long: true,
            display:"Description"
          },
          {
            display:'Something else',
            value:'Testing',
            long: true
          }
        ]));
      } else if (!(this.get('displayProperties') instanceof DisplayPropertiesCollection)) {
        this.set('displayProperties', new DisplayPropertiesCollection(this.get('displayProperties')));
      }
    }
  });
});