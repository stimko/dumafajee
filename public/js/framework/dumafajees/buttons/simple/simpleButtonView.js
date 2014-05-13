define(['../../base/baseView', 'tpl!./simpleButton.tpl', 'framework/marionetteApp'], 
  function(BaseView, SimpleButtonTpl, App){
    App.module('Rhymthm.buttons.simpleButtonView', function() {
      return BaseView.extend({
        tagName:'button',
        template: SimpleButtonTpl
      });
    });
  }
);