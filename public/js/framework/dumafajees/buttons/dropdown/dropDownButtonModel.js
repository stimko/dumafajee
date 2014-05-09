define(['../simple/simpleButtonModel'], function(SimpleButton) {
  return SimpleButton.extend({
    defaults:{
      "label":"Drop Down",
      items: []
    }
  });
});