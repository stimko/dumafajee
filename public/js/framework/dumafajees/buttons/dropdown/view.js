define(['../../base/views/baseView', 'tpl!./dropDownButton.tpl'], 
  function(BaseView, DropDownButtonTpl){
    return BaseView.extend({
      className: 'dropDown',
      template: DropDownButtonTpl
    });
  }
);