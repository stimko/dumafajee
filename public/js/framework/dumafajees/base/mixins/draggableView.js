define(function(require){
  var ViewRegistry = require('framework/registry/view/viewRegistry');

  var mixin = {
    setupDrag: function(viewInstance) {
      viewInstance.$el.attr('draggable', 'true');
      viewInstance.$el.on('dragstart', this.handleStartDrag.bind(viewInstance));
      viewInstance.$el.on('drop', this.handleDragDrop.bind(viewInstance));
    },
    handleDragDrop: function(e) {
      console.log('drag end');
    },
    handleStartDrag: function(e) {
      var transferObject = {
        model:{
          dumafajeeId: this.model.get('dataId'),
          type: this.model.get('dataType'),
          path: this.model.get('path')
        }
      }
      e.originalEvent.dataTransfer.setData('text/json', JSON.stringify(transferObject));
    },
    renderItem: function(item){
      var view = ViewRegistry.get(item.get('dumafajeeId'));
      var viewInstance = new view({
        model:item, 
        $container:this.$el
      });
      this.setupDrag(viewInstance);
    }
  };
  return mixin;
});