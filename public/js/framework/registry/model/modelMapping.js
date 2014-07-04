define(function(require){
  var ModelIds = require('framework/registry/model/modelIds');
  var ModelRegistry = require('framework/registry/model/modelRegistry');

  ModelRegistry.register(ModelIds.BASE_MODEL, require('framework/dumafajees/base/models/baseModel'));
  ModelRegistry.register(ModelIds.BASE_CONTENT_MODEL, require('framework/dumafajees/base/models/baseContentModel'));
  ModelRegistry.register(ModelIds.BASE_COMPOUND_MODEL, require('framework/dumafajees/base/models/baseCompoundModel'));
});