define(function(require){
  var $ = require('jquery');
  var PropertiesPanelView = require('./propertiesPanelView');
  var Controller = require('framework/controller');
  var Vent = require('framework/vent');

  return Controller.extend({
    initialize: function(opts) {
      this.setupPanel();
    },
    setupPanel: function() {
      var propertiesPanelView = new PropertiesPanelView();
      propertiesPanelView.render();

      Vent.on('dumafajee:dropped', function(dumafajee){
        propertiesPanelView.updateModel(dumafajee);
        $('body').append([propertiesPanelView.el]);
      });
    }
  });
});