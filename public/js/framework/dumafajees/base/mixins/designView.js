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
    setupClick: function(){
      this.$el.on('click', this.handleMouseDown.bind(this));
    },
    setupHover: function(){
      this.$el.on('mouseover', this.handleMouseOver.bind(this));
      this.$el.on('mouseout', this.handleMouseOut.bind(this));
      this.$el.on('dumafajee:remove', this.handleRemoveButton.bind(this));
    },
    setupDrop: function(){
      this.$el.on('drop', this.handleDrop.bind(this));
      this.$el.on('dragover', this.handleDragOver);
    },
    handleRemoveButton: function(event){
      event.stopImmediatePropagation();
      this.cleanup();
    },
    handleMouseOver: function(){
      this.$el.find('.widget-toolbar').addClass('display');
    },
    handleMouseOut: function(){
      this.$el.find('.widget-toolbar').removeClass('display');
    },
    handleStartDrag: function(e){
      e.stopImmediatePropagation();
      Vent.trigger('dumafajee:clicked', this.model);
      this.dirty = true;
      this.$el.off('drop');
      var transferObject = {
        model:this.model.attributes,
        cid: this.model.cid
      };

      console.log(this.model.cid);
      e.originalEvent.dataTransfer.setData('text/json', JSON.stringify(transferObject));
    },
    handleDragEnd: function(e){
      e.stopImmediatePropagation();
      this.dirty = false;
      this.$el.on('drop', this.handleDrop.bind(this));
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
      this.updateModel(transferObject.model, transferObject.cid);
    },
    updateModel: function(model, cid){
      var viewConstructor = ViewRegistry.get([model.dumafajeeId]);
      var instance = this.model.get('items').push(model);
      var designViewConstructor = viewConstructor.extend(mixin);
      var dataView = new designViewConstructor({
        model:instance,
        $container:this.$el,
      });
      Vent.trigger('dumafajee:dropped', instance);
      Vent.trigger('dumafajee:cleanup', cid);
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
    handleRemoveRequest: function(e, cid){
      e.stopImmediatePropagation();
      this.model.get('items').remove(cid);
    },
    cleanup: function(cid){
      this.$el.parent().trigger('remove:dumafajee', cid);
      this.remove();
    },
    afterRender:function(){
      if (this.model.get('type') === 'compound'){
        this.setupDrop();
        this.$el.on('remove:dumafajee', this.handleRemoveRequest.bind(this));
      }
      Vent.on('dumafajee:cleanup', function(cid){
        if (this.dirty) {
          this.cleanup(cid);
        }
      }.bind(this));
      this.setupClick();
      this.setupDrag();
      this.setupHover();
    }
  };
  return mixin;
});