define(function(require){
  var BaseView = require('../views/baseView');
  var Registry = require('framework/registry');
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
      e.originalEvent.dataTransfer.setData('text/plain', this.model.get('dataId'));
    },
    setupDrop: function(){
      this.$el.on('drop', this.handleDragDrop.bind(this));
      this.$el.on('dragover', this.handleDragOver.bind(this));
    },
    handleDragDrop: function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      var id = e.originalEvent.dataTransfer.getData("text/plain");
      this.updateModel(id);
    },
    updateModel: function(id){
      var modelConstructor = Registry.get([id + '.Model']);
      var viewConstructor = Registry.get([id]);
      var designViewConstructor = viewConstructor.extend(mixin);
      var instance = new modelConstructor();
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
      var view = Registry.get([item.get('dumafajeeId')]);
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