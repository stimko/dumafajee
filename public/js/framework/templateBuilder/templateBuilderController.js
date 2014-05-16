define(function(require){
  var $ = require('jquery');
  var SimpleButtonModel = require('framework/dumafajees/buttons/simple/simpleButtonModel');
  var DropDownButtonModel = require('framework/dumafajees/buttons/dropdown/dropDownButtonModel');
  var CompoundPanelModel = require('framework/dumafajees/panel/group/model');
  var CompoundPanelView = require('framework/dumafajees/panel/group/view');
  var ImageModel = require('framework/dumafajees/image/model');
  var ImageView = require('framework/dumafajees/image/view');
  var LabelModel = require('framework/dumafajees/text/label/model')
  // var HeaderRegionModel = require('framework/dumafajees/regions/header/headerRegionModel');
  // var ContentRegionModel = require('framework/dumafajees/regions/content/contentRegionModel');
  // var TemplateRegionView = require('framework/dumafajees/templates/views/template');
  // var TemplateRegionModel = require('framework/dumafajees/templates/models/template');
  var SimplePanelModel = require('framework/dumafajees/panel/simple/model');
  var Marionette = require('marionette');

  return Marionette.Controller.extend({
    initialize: function() {

      //var simpleButtonModel = new SimpleButtonModel();
      //var dropDownButtonModel = new DropDownButtonModel({items:['test', 'test2', 'test3']});

      //var imageModel = new ImageModel({source:'test'});
      //var imageView = new ImageView({model:imageModel});

      //console.log(imageView.el);

      /*Create Simple Panels for Vanity of Dumafajees, also attemtping to reuse framework wherever I can. 
      This will be generated from the server on bootstrap of dumafajee builder*/
      var simplePanelModel = new SimplePanelModel({
        dataId:'Button.SimpleButton',
        items:[new ImageModel({source:'SimpleButtonImage'}), new LabelModel({label:'SimpleButton'})], 
      });
      var simplePanelModel2 = new SimplePanelModel({
        dataId:'Button.DropDownButtonModel',
        items:[new ImageModel({source:'DropDownButtonImage'}), new LabelModel({label:'DropdownButton'})], 
      });

      var compoundPanel = new CompoundPanelModel({items:[simplePanelModel, simplePanelModel2]});
      var compoundPanelView = new CompoundPanelView({model:compoundPanel});
      compoundPanelView.render();

      // var headerRegionModel = new HeaderRegionModel({items:[simpleButtonModel, dropDownButtonModel, toolBarModel]});
      // var contentRegionModel = new ContentRegionModel({items:[simpleButtonModel, dropDownButtonModel, toolBarModel]});

      // var templateModel = new TemplateRegionModel({items:[contentRegionModel, headerRegionModel]});
      // var templateRegionView = new TemplateRegionView({model:templateModel});
      // templateRegionView.render();

      $('.stage').append([compoundPanelView.el]);
    }
  });
});