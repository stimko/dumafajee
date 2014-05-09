define(['../../base/baseView', 'tpl!./dropDownButton.tpl'], 
  function(BaseView, DropDownButtonTpl){
    return BaseView.extend({
      template: DropDownButtonTpl
    });
  }
);