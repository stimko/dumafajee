define(function(require){
  var registry = {};

  return {
    register: function(id, constructor){
      registry[id] = constructor;
    },
    get: function(id){
      return registry[id];
    }
  };
});