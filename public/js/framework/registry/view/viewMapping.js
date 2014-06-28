define(function(require){
  var ViewIds = require('./viewIds');
  var ViewRegistry = require('./viewRegistry');

  ViewRegistry.register(ViewIds.LABEL, require('framework/dumafajees/text/label/labelView'));
  ViewRegistry.register(ViewIds.IMAGE, require('framework/dumafajees/image/imageView'));
  ViewRegistry.register(ViewIds.SIMPLE_BUTTON, require('framework/dumafajees/buttons/simple/simpleButtonView'));
  ViewRegistry.register(ViewIds.DROP_DOWN_BUTTON, require('framework/dumafajees/buttons/dropdown/dropDownButtonView'));
  ViewRegistry.register(ViewIds.GROUP_PANEL, require('framework/dumafajees/panel/group/groupPanelView'));
  ViewRegistry.register(ViewIds.SIMPLE_PANEL, require('framework/dumafajees/panel/simple/simplePanelView'));
  ViewRegistry.register(ViewIds.HEADER_REGION, require('framework/dumafajees/regions/header/headerRegionView'));
  ViewRegistry.register(ViewIds.CONTENT_REGION, require('framework/dumafajees/regions/content/contentRegionView'));
  ViewRegistry.register(ViewIds.TEMPLATE, require('framework/dumafajees/templates/templateView'));
  ViewRegistry.register(ViewIds.HORIZONTAL_TOOLBAR, require('framework/dumafajees/toolbars/horizontal/horizontalToolbarView'));
});