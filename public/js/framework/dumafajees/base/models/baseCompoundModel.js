define(function(require) {
  var BaseModel = require('./baseModel');
  var BaseCompoundCollection = require('./baseCompoundCollection');

  return BaseModel.extend({
    defaults: _.extend({}, BaseModel.prototype.defaults, {
      type: 'compound'
    }),
    initialize: function(){
      if (!(this.get('items') instanceof BaseCompoundCollection))
        this.set('items', new BaseCompoundCollection(this.get('items')));
      BaseModel.prototype.initialize.call(this);
    },
    parse: function(attrs, opts){
      if (attrs.items) {
        attrs.items = new BaseCompoundCollection(attrs.items, opts);
      }
      return attrs;
    }
  });
});