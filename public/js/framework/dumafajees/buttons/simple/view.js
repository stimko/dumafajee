define(function(require){
  var BaseView = require('../../base/views/baseView');
  var SimpleButtonTpl = require('tpl!./simpleButton.tpl');
  
  return BaseView.extend({
    tagName:'button',
    template: SimpleButtonTpl
  });
});