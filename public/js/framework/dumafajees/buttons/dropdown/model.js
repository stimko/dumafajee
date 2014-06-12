define(function(require) {
  var SimpleButton = require('../simple/model');
  var DumafajeeIds = require('framework/dumafajeeIds');

  return SimpleButton.extend({
    defaults: _.extend({}, SimpleButton.prototype.defaults, {
      dumafajeeId: DumafajeeIds.DROP_DOWN_BUTTON,
      content:"Drop Down",
      items: []
    })
  });
});