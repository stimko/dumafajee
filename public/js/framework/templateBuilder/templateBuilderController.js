define(function(require){
  var $ = require('jquery');
  var HeaderRegionModel = require('framework/dumafajees/regions/header/headerRegionModel');
  var ContentRegionModel = require('framework/dumafajees/regions/content/contentRegionModel');
  var DefaultTemplateModel = require('framework/dumafajees/templates/templateModel');
  var DefaultTemplateView = require('framework/dumafajees/templates/templateView');
  var DumafajeePanelController = require('./dumafajeePanel/dumafajeePanelController');
  var PropertiesPanelController = require('./propertiesPanel/propertiesPanelController');
  var Controller = require('framework/controller');

  return Controller.extend({
    initialize: function() {
      var panelController = new DumafajeePanelController({
        cb:function(){this.configureTemplate()}.bind(this)
      });
      //var propertiesController = new PropertiesPanelController();
    },
    configureTemplate: function() {
      var defaultTemplate = new DefaultTemplateModel();
      var headerRegionModel = new HeaderRegionModel();

      defaultTemplate.get('items').push(headerRegionModel);
      var defaultTemplateView = new DefaultTemplateView({model:defaultTemplate});
      defaultTemplateView.render();

      $('body').append([defaultTemplateView.el]);
    }
  });
});