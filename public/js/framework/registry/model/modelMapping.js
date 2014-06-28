define(function(require){
  var ModelIds = require('framework/registry/model/modelIds');
  var ModelRegistry = require('framework/registry/model/modelRegistry');

  ModelRegistry.register(ModelIds.IMAGE_MODEL, require('framework/dumafajees/image/imageModel'));
  ModelRegistry.register(ModelIds.DROP_DOWN_BUTTON_MODEL, require('framework/dumafajees/buttons/dropdown/dropDownButtonModel'));
  ModelRegistry.register(ModelIds.BASE_MODEL, require('framework/dumafajees/base/models/baseModel'));
  ModelRegistry.register(ModelIds.BASE_COMPOUND_MODEL, require('framework/dumafajees/base/models/baseCompoundModel'));
});