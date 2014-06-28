define(function(require){
  var BaseView = require('./baseView');
  var ViewRegistry = require('framework/registry/view/viewRegistry');

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
      var view = ViewRegistry.get([item.get('dumafajeeId')]);
      var viewInstance = new view({
        model:item,
        $container:this.$el
      });
    }
  });
});