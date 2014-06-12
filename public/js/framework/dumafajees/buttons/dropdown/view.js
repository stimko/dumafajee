define(function(require){
    var BaseView = require('../../base/views/baseView');
    var DropDownButtonTpl = require('tpl!./dropDownButton.tpl');
    
    return BaseView.extend({
      className: 'dropDown',
      template: DropDownButtonTpl
    });
  }
);