define(['Backbone'], function(Backbone){
  return Backbone.Model.extend({
    defaults: {
      dumafajeeId: 'Rythym.Base',
      description: 'default',
      version: '0.1',
      type:'simple',
      content: 'default'
    }
  });
});