define(['Backbone'], function(Backbone){
  return Backbone.Model.extend({
    defaults: {
      dumafajeeId: 'Rythym.Base',
      description: 'default',
      version: '0.1',
      editType:'default',
      memo:'',
      accepts: [],
      draggable: false
    }
  });
});