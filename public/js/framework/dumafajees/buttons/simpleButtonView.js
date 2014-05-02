define(['../base/baseView', 'tpl!./simpleButton.tpl'], 
  function(BaseView, SimpleButtonTpl){
    return BaseView.extend({
      el:'<button></button>',
      template: SimpleButtonTpl,
      onRender: function() {
        console.log(this.el);
      }
    });
  }
);