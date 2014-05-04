define(function(require){
  var $ = require('jquery');
  var SimpleButtonView = require('./dumafajees/buttons/simpleButtonView');
  var SimpleButtonModel = require('./dumafajees/buttons/simpleButtonModel');

  var ToolBar = require('./dumafajees/toolbar/toolbarView');
  var ButtonCollection = require('./dumafajees/buttons/buttonCollection');

  return {
    init: function(){

      var simpleButton = new SimpleButtonView({model:new SimpleButtonModel()});
      simpleButton.render();

      var buttonCollection = new ButtonCollection([{label:'Home'}, {label:'About'}, {label:'Contact'}])
      var toolbar = new ToolBar({collection: buttonCollection});
      toolbar.render();

      $('.stage').append([simpleButton.el, toolbar.el]);
    }
  };
});