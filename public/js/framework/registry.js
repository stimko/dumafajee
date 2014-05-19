define(function(require){

  var DumafajeeIds = require('framework/dumafajeeIds');

  var ids = {};
  ids[DumafajeeIds.LABEL] = require('./dumafajees/text/label/view');
  ids[DumafajeeIds.LABEL_MODEL] = require('./dumafajees/text/label/model');

  ids[DumafajeeIds.IMAGE] = require('./dumafajees/image/view');
  ids[DumafajeeIds.IMAGE_MODEL] = require('./dumafajees/image/model');

  ids[DumafajeeIds.SIMPLE_BUTTON] = require('./dumafajees/buttons/simple/view');
  ids[DumafajeeIds.SIMPLE_BUTTON_MODEL] = require('./dumafajees/buttons/simple/model');

  ids[DumafajeeIds.DROP_DOWN_BUTTON] = require('./dumafajees/buttons/dropdown/view');
  ids[DumafajeeIds.DROP_DOWN_BUTTON_MODEL] = require('./dumafajees/buttons/dropdown/model');

  ids[DumafajeeIds.GROUP_PANEL] = require('./dumafajees/panel/group/view');
  ids[DumafajeeIds.GROUP_PANEL_MODEL] = require('./dumafajees/panel/group/model');

  ids[DumafajeeIds.SIMPLE_PANEL] = require('./dumafajees/panel/simple/view');
  ids[DumafajeeIds.SIMPLE_PANEL_MODEL] = require('./dumafajees/panel/simple/model');

  ids[DumafajeeIds.HEADER_REGION] = require('./dumafajees/regions/header/view');
  ids[DumafajeeIds.HEADER_REGION_MODEL] = require('./dumafajees/regions/header/model');

  ids[DumafajeeIds.CONTENT_REGION] = require('./dumafajees/regions/content/view');
  ids[DumafajeeIds.CONTENT_REGION_MODEL] = require('./dumafajees/regions/content/model');

  ids[DumafajeeIds.TEMPLATE] = require('./dumafajees/templates/view');
  ids[DumafajeeIds.TEMPLATE_MODEL] = require('./dumafajees/templates/model');
  return ids;
});