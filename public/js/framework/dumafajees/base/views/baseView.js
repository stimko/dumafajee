define(['marionette'], function(Marionette){
  return Marionette.ItemView.extend({
    initialize:function(options){
      this.registry = options.registry;
      this.model = options.model;
    }
  });
});