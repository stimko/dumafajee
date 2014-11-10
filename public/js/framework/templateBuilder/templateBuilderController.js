define(function(require){
  var $ = require('jquery');
  var TemplateModel = require('framework/dumafajees/templates/templateModel');
  var TemplateView = require('framework/dumafajees/templates/templateView');
  var DumafajeePanelController = require('./dumafajeePanel/dumafajeePanelController');
  var PropertiesPanelController = require('./propertiesPanel/propertiesPanelController');
  var Controller = require('framework/controller');
  var DesignViewMixin = require('framework/dumafajees/base/mixins/designView');
  var TemplateViewMixin = require('framework/dumafajees/base/mixins/templateViewMixin');

  return Controller.extend({
    initialize: function() {
      var panelController = new DumafajeePanelController({
        cb:function(){this.configureTemplate()}.bind(this)
      });
    },
    configureTemplate: function() {
      var defaultTemplate = new TemplateModel({dumafajeeId:'Template'});
      defaultTemplate.url = '/build';

      var designTemplateView = TemplateView.extend(DesignViewMixin).extend(TemplateViewMixin);
      var defaultTemplateView = new designTemplateView({
        model:defaultTemplate,
        $container:'body'
      });

      var propertiesController = new PropertiesPanelController();
      $('#publish').on('click', function(e){
        defaultTemplate.save();
      });
    }
  });
});