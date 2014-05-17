define(function(require){
  var $ = require('jquery');
  var SimpleButtonModel = require('framework/dumafajees/buttons/simple/simpleButtonModel');
  var DropDownButtonModel = require('framework/dumafajees/buttons/dropdown/dropDownButtonModel');
  var CompoundPanelModel = require('framework/dumafajees/panel/group/model');
  var CompoundPanelView = require('framework/dumafajees/panel/group/view');
  var ImageModel = require('framework/dumafajees/image/model');
  var LabelModel = require('framework/dumafajees/text/label/model');
  var SimplePanelModel = require('framework/dumafajees/panel/simple/model');

  var Marionette = require('marionette');

  return Marionette.Controller.extend({
    initialize: function() {
      this.setupPanel();
    },
    setupPanel: function() {
      /*Create Simple Panels for Vanity of Dumafajees, also attemtping to reuse framework wherever I can.
      This will be generated from the server on bootstrap of dumafajee builder*/
      var simplePanelModel = new SimplePanelModel({
        data: new SimpleButtonModel(),
        draggable: true,
        items:[new ImageModel({source:'SimpleButtonImage'}), new LabelModel({label:'SimpleButton'})],
      });
      var simplePanelModel2 = new SimplePanelModel({
        data: new DropDownButtonModel(),
        draggable: true,
        items:[new ImageModel({source:'DropDownButtonImage'}), new LabelModel({label:'DropdownButton'})],
      });

      var compoundPanel = new CompoundPanelModel({items:[simplePanelModel, simplePanelModel2]});
      var compoundPanelView = new CompoundPanelView({model:compoundPanel});
      compoundPanelView.render();

      $('body').append([compoundPanelView.el]);
    }
  });
});