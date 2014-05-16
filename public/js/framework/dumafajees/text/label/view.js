define(['framework/dumafajees/base/views/baseView', 'tpl!./label.tpl'], 
  function(BaseView, LabelTemplate){
    return BaseView.extend({
      tagName: 'label',
      template: LabelTemplate
    });
  }
);