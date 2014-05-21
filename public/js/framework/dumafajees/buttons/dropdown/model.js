define(['../simple/model'], function(SimpleButton) {
  return SimpleButton.extend({
    defaults: _.extend({}, SimpleButton.prototype.defaults, {
      dumafajeeId: "Button.DropDownButton",
      label:"Drop Down",
      items: []
    })
  });
});