define(function(require){
  var BaseView = require('../views/baseView');
  var ViewRegistry = require('framework/registry/view/viewRegistry');
  var ModelRegistry = require('framework/registry/model/modelRegistry');
  var Vent = require('framework/vent');

  var mixin = {
    initialize: function(opts){
      this.droppable = opts.droppable;
      this.draggable = opts.draggable;
      this.clickable = opts.clickable;
      BaseView.prototype.initialize.call(this, opts);
    },
    setupDrag: function() {
      this.$el.attr('draggable', 'true');
      this.$el.on('dragstart', this.handleStartDrag.bind(this));
      this.$el.on('drop', this.handleDragDrop.bind(this));
    },
    setupClick: function(){
      this.$el.on('mousedown', this.handleMouseDown.bind(this));
    },
    handleMouseDown:function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      Vent.trigger('dumafajee:clicked', this.model);
    },
    handleDragDrop: function(e) {
      console.log('drag end');
    },
    handleStartDrag: function(e) {
      var transferObject = {
        id:this.model.get('dataId'), 
        type: this.model.get('type')
      };
      e.originalEvent.dataTransfer.setData('text/json', JSON.stringify(transferObject));
    },
    setupDrop: function(){
      this.$el.on('drop', this.handleDragDrop.bind(this));
      this.$el.on('dragover', this.handleDragOver.bind(this));
    },
    handleDragDrop: function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      var transferObject = JSON.parse(e.originalEvent.dataTransfer.getData("text/json"));
      this.updateModel(transferObject);
    },
    updateModel: function(transferObject){
      var modelConstructor = ModelRegistry.get(transferObject.id+'.Model', transferObject.type);
      var viewConstructor = ViewRegistry.get([transferObject.id]);
      var designViewConstructor = viewConstructor.extend(mixin);
      var instance = new modelConstructor({dumafajeeId:transferObject.id});
      var dataView = new designViewConstructor({
        model:instance,
        $container:this.$el,
        droppable: this.droppable,
        clickable: this.clickable
      });
      this.model.get('items').push(instance);
      Vent.trigger('dumafajee:dropped', instance);
    },
    handleDragOver: function(e){
      e.preventDefault();
    },
    afterRender:function(){
      if (this.droppable){
        this.setupDrop();
      }
      if(this.clickable){
        this.setupClick();
      }
    },
    renderItem: function(item){
      var view = ViewRegistry.get(item.get('dumafajeeId'));
      var designView = view.extend(mixin);
      var viewInstance = new designView({
        model:item, 
        $container:this.$el,
        droppable:this.droppable,
        clickable:this.clickable
      });
      if(this.draggable){
        viewInstance.setupDrag();
      }
    }
  };
  return mixin;
});