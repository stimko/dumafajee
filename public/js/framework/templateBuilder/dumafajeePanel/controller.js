define(function(require){
  var $ = require('jquery');
  var SimpleButtonModel = require('framework/dumafajees/buttons/simple/model');
  var DropDownButtonModel = require('framework/dumafajees/buttons/dropdown/model');
  var CompoundPanelModel = require('framework/dumafajees/panel/group/model');
  var CompoundPanelView = require('framework/dumafajees/panel/group/view');
  var ImageModel = require('framework/dumafajees/image/model');
  var LabelModel = require('framework/dumafajees/text/label/model');
  var SimplePanelModel = require('framework/dumafajees/panel/simple/model');
  var SimplePanelView = require('framework/dumafajees/panel/simple/view');
  var DumafajeeIds = require('framework/dumafajeeIds');

  var Marionette = require('marionette');

  return Marionette.Controller.extend({
    initialize: function() {
      this.setupPanel();
    },
    setupPanel: function() {
      /*Create Simple Panels for Vanity of Dumafajees, also attemtping to reuse framework wherever I can.
      This will be generated from the server on bootstrap of dumafajee builder*/
      var simplePanelModel = new SimplePanelModel({
        dataId: DumafajeeIds.SIMPLE_BUTTON,
        draggable: true
      });
      simplePanelModel.items.push({id:'Image',source:'SimpleButtonImage'});
      simplePanelModel.items.push({id:'Text.Label',source:'SimpleButton!!!'});

      // simplePanelModel.items.models = [new ImageModel({source:'SimpleButtonImage'}), new LabelModel({label:'SimpleButton'})];

      // var simplePanelModel2 = new SimplePanelModel({
      //   dataId: DumafajeeIds.DROP_DOWN_BUTTON,
      //   draggable: true
      // });
      // simplePanelModel2.items.models = [new ImageModel({source:'DropDownButtonImage'}), new LabelModel({label:'DropdownButton'})];

      //var simplePanelView = new SimplePanelView({model:simplePanelModel});
      //simplePanelView.render();

      var compoundPanel = new CompoundPanelModel();
      compoundPanel.items.models = [simplePanelModel];

      //console.log(compoundPanel.toJSON());

      //var compoundPanelView = new CompoundPanelView({model:compoundPanel});
      //compoundPanelView.render();

      $('body').append([compoundPanelView.el]);
    }
  });
});