define(function(require){
  var $ = require('jquery');
  var BaseCompoundModel = require('framework/dumafajees/base/models/baseCompoundModel');
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
      var defaultTemplate = new BaseCompoundModel({dumafajeeId:'Template'});
      var headerRegionModel = new BaseCompoundModel({dumafajeeId:'Region.Header'});

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