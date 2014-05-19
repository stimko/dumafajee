define(['./baseView', 'framework/marionetteApp'], function(BaseView, MarionetteApp){
  return BaseView.extend({
    render: function() {
      var items = this.model.items.models;
      var itemsLength = items.length;
      while(itemsLength--){
        var currentItemModel = items[itemsLength];
        var view = MarionetteApp.Registry[currentItemModel.id];
        var viewInstance = new view({model:currentItemModel});
        viewInstance.render();
        this.$el.append(viewInstance.$el);
      }
    }
  });
});