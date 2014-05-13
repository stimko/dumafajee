define(function(require){

  var Marionette = require('marionette');
  var ToolbarView = require('./toolbarView');
  var ToolBarModel = require('./toolBarModel');
  var SimpleButtonModel = require('../buttons/simple/simpleButtonModel');
  var DropDownButtonModel = require('../buttons/dropdown/dropDownButtonModel');

    return Marionette.Controller.extend({
      initialize: function(){
        var simpleButtonModel = new SimpleButtonModel();
        var dropDownButtonModel = new DropDownButtonModel({items:['test', 'test2', 'test3']});
        var toolBarModel = new ToolBarModel({items:[simpleButtonModel, dropDownButtonModel]});
        var toolBarView = new ToolbarView({model:toolBarModel});
        toolBarView.render();
      }
    });
  }
);