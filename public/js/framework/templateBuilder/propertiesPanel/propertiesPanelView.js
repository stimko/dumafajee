define(function(require){
    var BaseView = require('framework/dumafajees/base/views/baseView');
    var PropertiesTemplate = require('tpl!./propertiesPanel.tpl');
    return BaseView.extend({
      updateModel: function(model){
        this.model = model;
        this.modelAttributes = _.map(this.model.attributes, function(attr){
          console.log(attr);
        });
      },
      template: PropertiesTemplate
    });
  }
);