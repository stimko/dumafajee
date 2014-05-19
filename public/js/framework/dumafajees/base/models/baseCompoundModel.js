define(['./baseModel', './baseCompoundCollection'], function(BaseModel, BaseCompoundCollection) {
  return BaseModel.extend({
    items: new BaseCompoundCollection()
  });
});