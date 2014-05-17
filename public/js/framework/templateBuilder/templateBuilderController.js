define(function(require){
  var $ = require('jquery');
  var SimpleButtonModel = require('framework/dumafajees/buttons/simple/simpleButtonModel');
  var DropDownButtonModel = require('framework/dumafajees/buttons/dropdown/dropDownButtonModel');
  var TemplateRegionModel = require('framework/dumafajees/templates/model');
  var HeaderRegionModel = require('framework/dumafajees/regions/header/model');
  var ContentRegionModel = require('framework/dumafajees/regions/content/model');
  var TemplateRegionView = require('framework/dumafajees/templates/view');
  var PanelController = require('./dumafajeePanel/controller');
  var Marionette = require('marionette');

  return Marionette.Controller.extend({
    initialize: function() {
      var panelController = new PanelController();
      this.configureTemplate();
    },
    configureTemplate: function() {
      var headerRegionModel = new HeaderRegionModel({items:[new SimpleButtonModel(), new DropDownButtonModel()]});
      var contentRegionModel = new ContentRegionModel({items:[new SimpleButtonModel(), new DropDownButtonModel()]});
      var templateModel = new TemplateRegionModel({items:[contentRegionModel, headerRegionModel]});
      var templateRegionView = new TemplateRegionView({model:templateModel});
      templateRegionView.render();
      templateRegionView.el.addEventListener('drop', this.handleDragDrop.bind(this));
      templateRegionView.el.addEventListener('dragover', this.handleDragOver.bind(this));
      $('body').append([templateRegionView.el]);
    },
    handleDragDrop: function(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData("text/plain");
      console.log(data);
    },
    handleDragOver: function(e) {
      e.preventDefault();
    }
  });
});