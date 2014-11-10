define(function(require){
  var BaseView = require('../../base/views/baseView');
  var SimpleRouterTemplate = require('tpl!./simpleRouterTemplate.tpl');

  return BaseView.extend({
    template: SimpleRouterTemplate,
    className: 'simple-router-dumafajee',
    handleTest: function(){
      this.$el.text("test route!");
    },
    handleSecond: function(){
      this.$el.text("segundo route!");
    }
  });
});