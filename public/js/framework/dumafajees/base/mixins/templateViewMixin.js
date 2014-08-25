define(function(require){
  var ViewRegistry = require('framework/registry/view/viewRegistry');
  var Vent = require('framework/vent');
  var designViewMixin = require('./designView');

  var templateViewMixin = {
    initialize: function(opts){
      Vent.on('dumafajee:dropped', this.addToUsedIds.bind(this));
      designViewMixin.initialize.call(this, opts);
    },
    addToUsedIds: function(instance){
      var path = instance.get('path');
      var id = instance.get('dumafajeeId');
      var usedIds = this.model.get('usedIds');
      if (!(usedIds[id]))
        usedIds[id] = path;
    }
  };
  return templateViewMixin;
});