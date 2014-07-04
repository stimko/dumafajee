define(function(require){
  var registry = {};

  return {
    register: function(id, constructor){
      registry[id] = constructor;
    },
    get: function(id, type){
      if (registry[id])
        return registry[id];
      else {
        switch(type){
          case 'compound':
            return registry['BaseCompoundModel'];
          case 'content':
            return registry['BaseContentModel'];
          default:
            return registry['BaseModel'];
        }
      }
    }
  };
});