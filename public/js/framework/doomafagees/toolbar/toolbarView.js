define(['../base/baseCollectionView', '../buttons/simpleButtonView', 'tpl!./toolbar.tpl'], 
  function(BaseCollectionView, SimpleButtonView, ToolBarTpl){
    return BaseCollectionView.extend({
      el:'<div class="toolbar"></div>',
      itemView: SimpleButtonView,
      onRender: function() {
        console.log(this.el);
      }
    });
  }
);