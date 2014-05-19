define(['../../base/models/baseCollectionModel', './simple/model'], function(BaseCollectionModel, SimpleButtonModel){
  return BaseCollectionModel.extend({
    model:SimpleButtonModel
  });
});