define(function(require){
  var $ = require('jquery');
  var SimplePanelModel = require('framework/dumafajees/panel/simple/model');
  var PropertiesPanelView = require('framework/dumafajees/panel/group/view');
  var Marionette = require('marionette');
  var Vent = require('framework/vent');

  return Marionette.Controller.extend({
    initialize: function(opts) {
      this.setupPanel();
    },
    setupPanel: function() {
      var compoundPanelView = new PropertiesPanelView();
      compoundPanelView.render();
      Vent.on('dumafajee:dropped', function(){
        console.log(arguments);
      });
      $('body').append([compoundPanelView.el]);
    }
  });
});