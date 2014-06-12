define(function(require){
  var $ = require('jquery');
  var HeaderRegionModel = require('framework/dumafajees/regions/header/model');
  var ContentRegionModel = require('framework/dumafajees/regions/content/model');
  var DefaultTemplateModel = require('framework/dumafajees/templates/model');
  var DefaultTemplateView = require('framework/dumafajees/templates/view');
  var DumafajeePanelController = require('./dumafajeePanel/controller');
  var PropertiesPanelController = require('./propertiesPanel/controller');
  var Controller = require('framework/controller');

  return Controller.extend({
    initialize: function() {
      var panelController = new DumafajeePanelController({
        cb:function(){this.configureTemplate()}.bind(this)
      });
      var propertiesView = new PropertiesPanelController();
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