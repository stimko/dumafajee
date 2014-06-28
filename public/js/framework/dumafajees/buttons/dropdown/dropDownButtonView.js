define(function(require){
  var BaseView = require('../../base/views/baseView');
  var DropDownButtonTpl = require('tpl!./dropDownButton.tpl');

  return BaseView.extend({
    className: ['dropDown', BaseView.prototype.className].join(' '),
    template: DropDownButtonTpl
  });
});