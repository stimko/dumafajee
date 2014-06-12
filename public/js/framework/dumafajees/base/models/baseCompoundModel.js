define(function(require) {
  var BaseModel = require('./baseModel');
  var BaseCompoundCollection = require('./baseCompoundCollection');

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