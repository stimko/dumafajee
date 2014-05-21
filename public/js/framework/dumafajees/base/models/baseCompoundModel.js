define(['./baseModel', './baseCompoundCollection'], function(BaseModel, BaseCompoundCollection) {
  return BaseModel.extend({
    initialize: function(){
      if (!this.get('items')){
        this.set('items', new BaseCompoundCollection());
      }
    },
    parse: function(attrs, opts){
      if (attrs.items) {
        attrs.items = new BaseCompoundCollection(attrs.items, opts);
      }
      return attrs;
    }
  });
});