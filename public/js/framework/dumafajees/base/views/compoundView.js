define(['./baseView', 'framework/marionetteApp'], function(BaseView, MarionetteApp){
  return BaseView.extend({
    render: function() {
      var items = this.model.get('items').models;
      var itemsLength = items.length;
      while(itemsLength--){
        var currentItemModel = items[itemsLength];
        var view = MarionetteApp.Registry[currentItemModel.get('dumafajeeId')];
        var viewInstance = new view({model:currentItemModel});
        viewInstance.render();
        this.$el.append(viewInstance.$el);
      }
    }
  });
});