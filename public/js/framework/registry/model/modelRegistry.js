define(function(require){
  var registry = {};

  return {
    register: function(id, constructor){
      registry[id] = constructor;
    },
    get: function(id, type){
      if (registry[id])
        return registry[id];
      else 
        return type === 'compound' ? registry['BaseCompoundModel'] : registry['BaseModel'];
    }
  };
});