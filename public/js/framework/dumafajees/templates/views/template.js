define(['../base/views/baseView', 'tpl!./template.tpl'], 
  function(BaseView, TemplateTpl){
    return BaseView.extend({
      className:'template',
      template: TemplateTpl
    });
  }
);