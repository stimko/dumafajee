define(['../../base/baseCollectionModel', './simple/simpleButtonModel'], function(BaseCollectionModel, SimpleButtonModel){
  return BaseCollectionModel.extend({
    model:SimpleButtonModel
  });
});