define(function(require){
  var $ = require('jquery');
  var registry = require('./registry');
  var MarionetteApp = require('./marionetteApp');
  var SimpleButtonModel = require('./dumafajees/buttons/simple/simpleButtonModel');
  var DropDownButtonModel = require('./dumafajees/buttons/dropdown/dropDownButtonModel');
  var ToolBarModel = require('./dumafajees/toolbar/toolBarModel');
  var HeaderRegionModel = require('./dumafajees/regions/header/headerRegionModel');

  return {
    init: function(){
      MarionetteApp.Registry = registry;

      //var toolbarController = new ToolBarController();
      var simpleButtonModel = new SimpleButtonModel();
      var dropDownButtonModel = new DropDownButtonModel({items:['test', 'test2', 'test3']});

      var toolBarModel = new ToolBarModel({items:[simpleButtonModel, dropDownButtonModel]});
      //var toolbar = new registry['Compound.Toolbar']({model:toolBarModel, registry:registry});

      var headerRegionModel = new HeaderRegionModel({items:[simpleButtonModel, dropDownButtonModel, toolBarModel]});
      var headerRegion = new registry['Region.Header']({model:headerRegionModel, registry:registry});
      headerRegion.render();

      $('.stage').append([headerRegion.el]);
    }
  };
});