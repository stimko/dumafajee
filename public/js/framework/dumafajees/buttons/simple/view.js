define(['../../base/views/baseView', 'tpl!./simpleButton.tpl'], 
  function(BaseView, SimpleButtonTpl){
    return BaseView.extend({
      tagName:'button',
      template: SimpleButtonTpl
    });
  }
);