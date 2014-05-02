define(['../base/baseView', 'tpl!./simpleButton.tpl'], 
  function(BaseView, SimpleButtonTpl){
    return BaseView.extend({
      template: SimpleButtonTpl,
      onRender: function() {
        console.log(this.el);
      }
    });
  }
);