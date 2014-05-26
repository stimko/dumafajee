define(['backbone'], function(Backbone){
  return Backbone.View.extend({
    initialize: function(options) {
      this.model = options.model;
      if (this.model.get('draggable') === true){
        this.setupDrag();
      }
    },
    setupDrag: function() {
      this.el.setAttribute('draggable', 'true');
      this.el.addEventListener('dragstart', this.handleStartDrag.bind(this), false);
      this.el.addEventListener('drop', this.handleDragDrop.bind(this), false);
    },
    handleDragDrop: function(e) {
      console.log('drag end');
    },
    handleStartDrag: function(e) {
      e.dataTransfer.setData('text/plain', this.model.get('dataId'));
    },
    render: function(){
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });
});