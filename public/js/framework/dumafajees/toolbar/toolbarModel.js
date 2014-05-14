define(['../base/models/baseModel', '../buttons/simple/simpleButtonModel'], 
  function(Base, SimpleButtonModel) {
  return Base.extend({
    defaults:{
      id:'Compound.Toolbar',
      items: []
    }
  });
});