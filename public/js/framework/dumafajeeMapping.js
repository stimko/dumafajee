define(function(require){

  var DumafajeeIds = require('framework/dumafajeeIds');
  var dumafajeeRegistry = require('framework/registry');

  dumafajeeRegistry.register(DumafajeeIds.LABEL, require('./dumafajees/text/label/labelView'));
  dumafajeeRegistry.register(DumafajeeIds.LABEL_MODEL, require('./dumafajees/text/label/labelModel'));

  dumafajeeRegistry.register(DumafajeeIds.IMAGE, require('./dumafajees/image/imageView'));
  dumafajeeRegistry.register(DumafajeeIds.IMAGE_MODEL, require('./dumafajees/image/imageModel'));

  dumafajeeRegistry.register(DumafajeeIds.SIMPLE_BUTTON, require('./dumafajees/buttons/simple/simpleButtonView'));
  dumafajeeRegistry.register(DumafajeeIds.SIMPLE_BUTTON_MODEL, require('./dumafajees/buttons/simple/simpleButtonModel'));

  dumafajeeRegistry.register(DumafajeeIds.DROP_DOWN_BUTTON, require('./dumafajees/buttons/dropdown/dropDownButtonView'));
  dumafajeeRegistry.register(DumafajeeIds.DROP_DOWN_BUTTON_MODEL, require('./dumafajees/buttons/dropdown/dropDownButtonModel'));

  dumafajeeRegistry.register(DumafajeeIds.GROUP_PANEL, require('./dumafajees/panel/group/groupPanelView'));
  dumafajeeRegistry.register(DumafajeeIds.GROUP_PANEL_MODEL, require('./dumafajees/panel/group/groupPanelModel'));

  dumafajeeRegistry.register(DumafajeeIds.SIMPLE_PANEL, require('./dumafajees/panel/simple/simplePanelView'));
  dumafajeeRegistry.register(DumafajeeIds.SIMPLE_PANEL_MODEL, require('./dumafajees/panel/simple/simplePanelModel'));

  dumafajeeRegistry.register(DumafajeeIds.HEADER_REGION, require('./dumafajees/regions/header/headerRegionView'));
  dumafajeeRegistry.register(DumafajeeIds.HEADER_REGION_MODEL, require('./dumafajees/regions/header/headerRegionModel'));

  dumafajeeRegistry.register(DumafajeeIds.CONTENT_REGION, require('./dumafajees/regions/content/contentRegionView'));
  dumafajeeRegistry.register(DumafajeeIds.CONTENT_REGION_MODEL, require('./dumafajees/regions/content/contentRegionModel'));

  dumafajeeRegistry.register(DumafajeeIds.TEMPLATE, require('./dumafajees/templates/templateView'));
  dumafajeeRegistry.register(DumafajeeIds.TEMPLATE_MODEL, require('./dumafajees/templates/templateModel'));

  dumafajeeRegistry.register(DumafajeeIds.HORIZONTAL_TOOLBAR, require('./dumafajees/toolbars/horizontal/horizontalToolbarView'));
  dumafajeeRegistry.register(DumafajeeIds.HORIZONTAL_TOOLBAR_MODEL, require('./dumafajees/toolbars/horizontal/horizontalToolbarModel'));

});