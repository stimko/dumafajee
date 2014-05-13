define(['../../base/baseView', 'tpl!./dropDownButton.tpl', 'framework/marionetteApp'], 
  function(BaseView, DropDownButtonTpl, App){
    App.module('Rhythm.buttons.dropDownButton', function() {
      return BaseView.extend({
        className: 'dropDown',
        template: DropDownButtonTpl
      });
    });
  }
);