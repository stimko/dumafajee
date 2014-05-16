define(function(require){
  return {
    "Text.Label": require('./dumafajees/text/label/view'),
    "Image": require('./dumafajees/image/view'),

    "Button.SimpleButton": require('./dumafajees/buttons/simple/simpleButtonView'),
    "Button.DropDownButton": require('./dumafajees/buttons/dropdown/dropDownButtonView'),

    "Compound.GroupPanel": require('./dumafajees/panel/group/view'),
    "Compound.SimplePanel": require('./dumafajees/panel/simple/view'),

    "Region.Header": require('./dumafajees/regions/header/headerRegionView'),
    "Region.Content": require('./dumafajees/regions/content/contentRegionView'),

    "Template": require('./dumafajees/templates/views/template')
  };
});