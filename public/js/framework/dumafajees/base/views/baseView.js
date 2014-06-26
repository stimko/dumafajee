define(function(require){
  var Backbone = require('backbone');
  var Rivets = require('rivets');

  return Backbone.View.extend({
    className:'dumafajee',
    initialize: function(opts) {
      this.model = opts.model;
      this.$container = opts.$container;
      this.render();
    },
    render: function(){
      this.$el.html(this.template(this.model.attributes));
      Rivets.bind(this.$el, {model:this.model.attributes});
      if(this.$container){
        this.$el.appendTo(this.$container);
      }
      this.afterRender();
    },
    afterRender:function(){}
  });
});