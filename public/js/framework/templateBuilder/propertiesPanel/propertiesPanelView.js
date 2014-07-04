define(function(require){
    var Backbone = require('backbone');
    var PropertiesTemplate = require('tpl!./propertiesPanel.tpl');
    var rivets = require('rivets');
    var Vent = require('framework/vent');
    
    return Backbone.View.extend({
      className: 'group-panel properties-panel',
      template: PropertiesTemplate,
      $container:'body',
      updateModel: function(model){
        this.model = model;
        this.render();
      },
      render: function(){
        this.$el.html(this.template());
        this.configureDropZone();

        if (this.rivetsView) 
          this.rivetsView.unbind();

        this.rivetsView = rivets.bind(this.$el, {
          model:this.model.attributes, 
          displayProperties:this.model.get('displayProperties').models
        });

        this.$el.appendTo(this.$container);
      },
      configureDropZone:function(){
        var $dropzone = this.$el.find('.dropzone');
        $dropzone.on('drop', function(){
          Vent.trigger('dumafajee:cleanup');
          $dropzone.removeClass('dragover');
          this.rivetsView.unbind();
        }.bind(this));
        $dropzone.on('dragover', function(e){
          e.preventDefault();
          $dropzone.addClass('dragover');
        });
        $dropzone.on('dragout', function(e){
          $dropzone.removeClass('dragover');
        });
      }
    });
  }
);