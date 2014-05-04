define(['../base/baseView', '../buttons/simpleButtonView', 'tpl!./toolbar.tpl'], 
  function(BaseView, SimpleButtonView, ToolBarTpl){
    return BaseView.extend({
      className: 'toolbar',
      template: ToolBarTpl
    });
  }
);