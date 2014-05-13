define(['../simple/simpleButtonModel'], function(SimpleButton) {
  return SimpleButton.extend({
    defaults:{
      "id": "Rhythm.buttons.dropDownButton",
      "label":"Drop Down",
      items: []
    }
  });
});