define(function(require){
  var BaseView = require('./baseView'); 
  var Registry = require('framework/registry');
  var Vent = require('framework/vent');

  return BaseView.extend({
    className: 'compound-dumafajee',
    render: function() {
      var items = this.model.get('items').models;
      _.each(items, this.renderItem.bind(this));
      if(this.$container){
        this.$el.appendTo(this.$container);
      }
      this.afterRender();
    },
    renderItem: function(item){
      var view = Registry.get([item.get('dumafajeeId')]);
      var viewInstance = new view({
        model:item, 
        $container:this.$el,
        droppable:this.droppable
      });
      if(this.draggable){
        viewInstance.setupDrag();
      }
    },
    setupDrop: function(){
      this.$el.on('drop', this.handleDragDrop.bind(this));
      this.$el.on('dragover', this.handleDragOver.bind(this));
    },
    handleDragDrop: function(e){
      var id = e.originalEvent.dataTransfer.getData("text/plain");
      this.updateModel(id);
      e.preventDefault();
      e.stopImmediatePropagation();
    },
    updateModel: function(id){
      var modelConstructor = Registry.get([id + '.Model']);
      var viewConstructor = Registry.get([id]);
      var instance = new modelConstructor();
      var dataView = new viewConstructor({model:instance, $container:this.$el});
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
    }
  });
});