define(['../base/baseView', '../buttons/simple/simpleButtonView', 'framework/marionetteApp'], 
  function(BaseView, SimpleButtonView, App){
    App.module('Rhythm.toolbar', function() {
      this.view = BaseView.extend({
        className: 'toolbar',
        render: function() {
          var items = this.model.get('items');
          var itemsLength = items.length;
          while(itemsLength--) {
            console.log(items[itemsLength].id);
          }
        }
      });
    });
  }
);