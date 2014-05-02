define(function(require){
  var $ = require('jquery');
  var SimpleButtonView = require('./dumafajees/buttons/simpleButtonView');
  var SimpleButtonModel = require('./dumafajees/buttons/simpleButtonModel');

  var ToolBar = require('./dumafajees/toolbar/toolbarView');
  var ToolBarCollection = require('./dumafajees/toolbar/toolbarModel');

  return {
    init: function(){

      var simpleButton = new SimpleButtonView({model:new SimpleButtonModel()});
      simpleButton.render();

      var tbCollection = new ToolBarCollection([{'label':'test'}, {'label':'test2'}]);
      console.log(tbCollection.models);
      var toolbar = new ToolBar({collection: tbCollection});
      toolbar.render();

      $('.stage').append([simpleButton.el, toolbar.el]);


    }
  };
});