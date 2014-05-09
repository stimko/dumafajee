define(function(require){
  var $ = require('jquery');
  var SimpleButtonView = require('./dumafajees/buttons/simple/simpleButtonView');
  var SimpleButtonModel = require('./dumafajees/buttons/simple/simpleButtonModel');
  var DropDownButtonView = require('./dumafajees/buttons/dropdown/dropDownButtonView');
  var DropDownButtonModel = require('./dumafajees/buttons/dropdown/dropDownButtonModel');

  // var ToolBarView = require('./dumafajees/toolbar/toolbarView');
  // var ButtonCollection = require('./dumafajees/buttons/buttonCollection');
  // var ToolBarModel = require('./dumafajees/buttons/buttonModel');

  // var templateView = require('./dumafagees/templates/views/template');
  // var templateModel = require('./dumafagees/templates/views/template');

  // var headerWidgetsCollection = require('./dumafagees/templates/models/headerWidgetsCollection');

  return {
    init: function(){

      var simpleButton = new SimpleButtonView({model: new SimpleButtonModel()});
      simpleButton.render();

      var dropDownButtonView = new DropDownButtonView({
        model: new DropDownButtonModel({
          items:['test1', 'test2', 'test3']})
      });

      dropDownButtonView.render();

      // var toolbarModel = new ToolBarModel({
      //   items: new ButtonCollection([{label:'Home'}, {label:'About'}, {label:'Contact'}]
      // });

      //var toolbar = new ToolBarView({model: toolbarModel});
      //toolbar.render();

      //$('.stage').append([simpleButton.el, toolbar.el]);
    }
  };
});