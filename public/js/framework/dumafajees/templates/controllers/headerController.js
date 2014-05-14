define(function(require){

  var Marionette = require('marionette');
  var ToolbarView = require('../../toolbar/toolbarView');
  var SimpleButton = require('../../buttons/simpleButton');
  var HeaderModel = require('../model/headerRegion');
  var HeaderRegionView = require('../views/headerRegion');

  return Marionette.Controller.extend({
    initialize: function() {
      var simpleButton = new SimpleButtonView({model:new SimpleButtonModel()});

      var buttonCollection = new ButtonCollection([{label:'Home'}, {label:'About'}, {label:'Contact'}])
      var toolbar = new ToolBarView({collection: buttonCollection});

      var headerWidgetsCollection = new headerWidgetsCollection();
      headerWidgetsCollection.push(toolbar);
      headerWidgetsCollection.push(simpleButton);
      
      var headerModel = new HeaderModel({items:headerWidgetsCollection})];
      var headerRegionView = new HeaderRegionView({model:headerModel});
    }
  });
  }
);