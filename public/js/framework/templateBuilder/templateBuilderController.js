define(function(require){
  var $ = require('jquery');
  var SimpleButtonModel = require('framework/dumafajees/buttons/simple/model');
  var DropDownButtonModel = require('framework/dumafajees/buttons/dropdown/model');
  var GroupPanel = require('framework/dumafajees/panel/group/model');
  var TemplateRegionModel = require('framework/dumafajees/templates/model');
  var HeaderRegionModel = require('framework/dumafajees/regions/header/model');
  var ContentRegionModel = require('framework/dumafajees/regions/content/model');
  var TemplateRegionView = require('framework/dumafajees/templates/view');
  var PanelController = require('./dumafajeePanel/controller');
  var Marionette = require('marionette');
  var MarionetteApp = require('framework/marionetteApp');

  return Marionette.Controller.extend({
    initialize: function() {
      // var simpleButtonModel = new SimpleButtonModel();
      // var simpleButtonModel2 = new SimpleButtonModel();
      // var groupPanel = new GroupPanel();
      // groupPanel.items.push({id:'Button.SimpleButton'});
      var panelController = new PanelController();
      //this.configureTemplate();
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
      var id = e.dataTransfer.getData("text/plain");
      var modelConstructor = MarionetteApp.Registry[id + 'Model'];
      var dataView = new viewConstructor({model:new modelConstructor()});
      e.preventDefault();
      $(e.currentTarget).append(dataView.el);
    },
    handleDragOver: function(e) {
      e.preventDefault();
    }
  });
});