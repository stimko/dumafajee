define(['../base/baseCollectionModel', './simpleButtonModel'], function(BaseCollectionModel, SimpleButtonModel){
  return BaseCollectionModel.extend({
    model:SimpleButtonModel
  });
});