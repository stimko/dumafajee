define(['../base/baseModel', '../buttons/simpleButtonModel'], 
  function(Base, SimpleButtonModel) {
  return Base.extend({
    items: new ButtonCollection()
  });
});