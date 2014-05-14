define(['./baseView', 'framework/marionetteApp'], function(BaseView, marionetteApp){
  return BaseView.extend({
    render: function() {
      var items = this.model.get('items')
      var itemsLength = items.length;
      while(itemsLength--){
        var currentItemModel = items[itemsLength];
        var view = marionetteApp.Registry[currentItemModel.id];
        var viewInstance = new view({model:currentItemModel});
        viewInstance.render();
        this.$el.append(viewInstance.el);
      }
    }
  });
});