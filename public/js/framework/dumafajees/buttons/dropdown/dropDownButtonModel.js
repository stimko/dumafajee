define(['../simple/simpleButtonModel'], function(SimpleButton) {
  return SimpleButton.extend({
    defaults:{
      "id": "Button.DropDownButton",
      "label":"Drop Down",
      items: []
    }
  });
});