define(function(require){
  var BaseView = require('./baseView'); 
  var Registry = require('framework/registry');

  return BaseView.extend({
    render: function() {
      var items = this.model.get('items').models;
      _.each(items, this.renderItem.bind(this));
    },
    renderItem: function(item){
      var view = Registry[item.get('dumafajeeId')];
      var viewInstance = new view({model:item});
      viewInstance.render();
      this.$el.append(viewInstance.$el);
    }
  });
});