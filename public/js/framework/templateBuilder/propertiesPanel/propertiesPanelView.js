define(function(require){
    var Backbone = require('backbone');
    var PropertiesTemplate = require('tpl!./propertiesPanel.tpl');
    var rivets = require('rivets');
    var Vent = require('framework/vent');
    var $ = require('jquery');

    return Backbone.View.extend({
      className: 'group-panel properties-panel',
      template: PropertiesTemplate,
      $container:'body',
      initialize: function(){
        Vent.on({'dumafajee:clicked':this.updateModel.bind(this),
          'dumafajee:dropped':this.updateModel.bind(this)
        });
        this.render();
      },
      updateModel: function(model){
        this.render(model);
      },
      render: function(model){
        this.$el.html(this.template());
        this.configureDropZone();

        if (this.rivetsView) 
          this.rivetsView.unbind();

        this.$el.appendTo(this.$container);

        if(model) {
          this.rivetsView = rivets.bind(this.$el, {
            model:model.attributes, 
            displayProperties:model.get('displayProperties').models
          });
          $('#dumafajeeDetails').show();
        } else $('#dumafajeeDetails').hide();
      },
      configureDropZone:function(){
        this.$dropzone = this.$el.find('.dropzone');
        this.$dropzone.on('drop', this.handleDrop.bind(this));
        this.$dropzone.on('dragover', this.handleDragOver.bind(this));
        this.$dropzone.on('dragout', this.handleDragLeave.bind(this));
      },
      handleDragLeave: function(e){
        this.$dropzone.removeClass('dragover');
      },
      handleDragOver: function(e){
        e.preventDefault();
        this.$dropzone.addClass('dragover');
      },
      handleDrop: function(e){
        var transferObject = JSON.parse(e.originalEvent.dataTransfer.getData("text/json"));
        Vent.trigger('dumafajee:cleanup', transferObject.cid);
        this.$dropzone.removeClass('dragover');
        this.render();
      }
    });
  }
);