define(['framework/dumafajees/base/models/baseCompoundModel'], 
  function(BaseCompoundModel) {
  return BaseCompoundModel.extend({
    url:'/dumafajee',
    defaults: _.extend({}, BaseCompoundModel.prototype.defaults, {
      dumafajeeId:'Compound.GroupPanel'
    })
  });
});