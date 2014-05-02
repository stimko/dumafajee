define(['../base/baseCollectionModel', '../buttons/simpleButtonModel'], function(BaseCollection, SimpleButtonModel) {
  return BaseCollection.extend({
    model: SimpleButtonModel
  });
});