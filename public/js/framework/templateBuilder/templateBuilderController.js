define(function(require){
  var $ = require('jquery');
  var HeaderRegionModel = require('framework/dumafajees/regions/header/headerRegionModel');
  var ContentRegionModel = require('framework/dumafajees/regions/content/contentRegionModel');
  var DefaultTemplateModel = require('framework/dumafajees/templates/templateModel');
  var TemplateView = require('framework/dumafajees/templates/templateView');
  var DumafajeePanelController = require('./dumafajeePanel/dumafajeePanelController');
  var PropertiesPanelController = require('./propertiesPanel/propertiesPanelController');
  var Controller = require('framework/controller');
  var DesignViewMixin = require('framework/dumafajees/base/mixins/designView');

  return Controller.extend({
    initialize: function() {
      var panelController = new DumafajeePanelController({
        cb:function(){this.configureTemplate()}.bind(this)
      });
    },
    configureTemplate: function() {
      var defaultTemplate = new DefaultTemplateModel();
      var headerRegionModel = new HeaderRegionModel();

      defaultTemplate.get('items').push(headerRegionModel);
      var designTemplateView = TemplateView.extend(DesignViewMixin);
      var defaultTemplateView = new designTemplateView({
        model:defaultTemplate,
        $container:'body',
        droppable:true,
        clickable:true
      });
      var propertiesController = new PropertiesPanelController();
    }
  });
});