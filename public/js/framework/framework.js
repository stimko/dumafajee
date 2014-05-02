define(function(require){
  var $ = require('jquery');
  var SimpleButtonView = require('./doomafagees/buttons/simpleButtonView');
  var SimpleButtonModel = require('./doomafagees/buttons/simpleButtonModel');

  var ToolBar = require('./doomafagees/toolbar/toolbarView');
  var ToolBarCollection = require('./doomafagees/toolbar/toolbarModel');

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