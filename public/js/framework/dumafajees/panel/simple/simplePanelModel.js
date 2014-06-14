define(['framework/dumafajees/base/models/baseCompoundModel'], 
  function(BaseCompoundModel) {
  return BaseCompoundModel.extend({
    url:'/test',
    defaults: _.extend({}, BaseCompoundModel.prototype.defaults, {
      dumafajeeId:'Compound.SimplePanel'
    })
  });
});