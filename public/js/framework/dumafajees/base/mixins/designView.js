define(function(require){
  var BaseView = require('../views/baseView');
  var ViewRegistry = require('framework/registry/view/viewRegistry');
  var ModelRegistry = require('framework/registry/model/modelRegistry');
  var Vent = require('framework/vent');

  var mixin = {
    setupDrag: function(){
      this.$el.attr('draggable', 'true');
      this.$el.on('dragstart', this.handleStartDrag.bind(this));
      this.$el.on('dragend', this.handleDragEnd.bind(this));
    },
    handleStartDrag: function(e){
      e.stopImmediatePropagation();
      this.dirty = true;
      e.originalEvent.dataTransfer.setData('text/json', JSON.stringify(this.model.attributes));
    },
    handleDragEnd: function(e){
      e.stopImmediatePropagation();
      this.dirty = false;
    },
    setupClick: function(){
      this.$el.on('mousedown', this.handleMouseDown.bind(this));
    },
    handleMouseDown:function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      Vent.trigger('dumafajee:clicked', this.model);
    },
    handleDrop: function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      var transferObject = JSON.parse(e.originalEvent.dataTransfer.getData("text/json"));
      this.updateModel(transferObject);
    },
    updateModel: function(model){
      var modelConstructor = ModelRegistry.get(model.dumafajeeId+'.Model', model.type);
      var viewConstructor = ViewRegistry.get([model.dumafajeeId]);
      var instance = new modelConstructor(model);
      var designViewConstructor = viewConstructor.extend(mixin);
      var dataView = new designViewConstructor({
        model:instance,
        $container:this.$el,
      });
      this.model.get('items').push(instance);
      Vent.trigger('dumafajee:dropped', instance);
    },
    handleDragOver: function(e){
      e.preventDefault();
    },
    renderItem: function(item){
      var viewConstructor = ViewRegistry.get([item.get('dumafajeeId')]);
      var designView = viewConstructor.extend(mixin);
      var viewInstance = new designView({
        model:item,
        $container:this.$el
      });
    },
    handleCleanupRequest: function(e){
      e.stopImmediatePropagation();
      if (this.dirty) this.remove();
    },
    handleRemoveRequest:function(event, model){
      event.stopImmediatePropagation();
      this.model.get('items').remove(model);
    },
    setupDrop: function(){
      this.$el.on('drop', this.handleDrop.bind(this));
      this.$el.on('dragover', this.handleDragOver.bind(this));
    },
    afterRender:function(){
      if (this.model.get('type') === 'compound'){
        this.setupDrop();
        this.$el.on('remove:dumafajee', this.handleRemoveRequest.bind(this));
      }
      Vent.on('dumafajee:dropped', function(){
        if (this.dirty) {
          this.$el.parent().trigger('remove:dumafajee', this.model);
          this.remove();
        }
      }.bind(this));
      //this.setupClick();
      this.setupDrag();
    }
  };
  return mixin;
});