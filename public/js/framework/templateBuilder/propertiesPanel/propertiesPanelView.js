define(function(require){
    var Backbone = require('backbone');
    var PropertiesTemplate = require('tpl!./propertiesPanel.tpl');
    var rivets = require('rivets');
    
    return Backbone.View.extend({
      className: 'group-panel',
      template: PropertiesTemplate,
      updateModel: function(model){
        this.model = model;
        this.render();
      },
      render: function(){
        this.$el.html(this.template());
        rivets.bind(this.$el, {model:this.model.attributes});
        if(this.$container){
          this.$el.appendTo(this.$container);
        }
        return this;
      }
    });
  }
);