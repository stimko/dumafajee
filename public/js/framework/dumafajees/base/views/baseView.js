define(['backbone', 'rivets'], function(Backbone, Rivets){
  return Backbone.View.extend({
    className:'dumafajee',
    initialize: function(opts) {
      this.model = opts.model;
      this.$container = opts.$container;
      this.droppable = opts.droppable;
      this.draggable = opts.draggable;
      this.render();
    },
    render: function(){
      this.$el.html(this.template(this.model.attributes));
      Rivets.bind(this.$el, {model:this.model.attributes});
      if(this.$container){
        this.$el.appendTo(this.$container);
      }
      this.afterRender();
      return this;
    },
    setupDrag: function() {
      this.$el.attr('draggable', 'true');
      this.$el.on('dragstart', this.handleStartDrag.bind(this));
      this.$el.on('drop', this.handleDragDrop.bind(this));
    },
    handleDragDrop: function(e) {
      console.log('drag end');
    },
    handleStartDrag: function(e) {
      e.originalEvent.dataTransfer.setData('text/plain', this.model.get('dataId'));
    },
    afterRender:function(){}
  });
});