define(function(require){
  var $ = require('jquery');
  var registry = require('./registry');
  var MarionetteApp = require('./marionetteApp');

  return {
    init: function(){

      //var simpleButton = new SimpleButtonView({model: new SimpleButtonModel()});
      //simpleButton.render();

      // var dropDownButtonView = new DropDownButtonView({
      //   model: new DropDownButtonModel({
      //     items:['test1', 'test2', 'test3']})
      // });

      //var toolbarController = new ToolBarController();
      var simpleButtonModel = new SimpleButtonModel();
      var dropDownButtonModel = new DropDownButtonModel({items:['test', 'test2', 'test3']});

      var toolBarModel = new ToolBarModel({items:[simpleButtonModel, dropDownButtonModel]});
      var toolbarView = MarionetteApp.module('Rhythm.toolbar').view;

      var toolbar = new toolbarView({model:toolBarModel});
      toolbar.render();

      //$('.stage').append([simpleButton.el, dropDownButtonView.el]);
    }
  };
});