define(function(require){

  return {
    extend: function(overrides){
      var controller = function(){
        overrides.initialize.apply(this, arguments);
      };
      for(var method in overrides) {
        if (method !== 'initialize'){
          controller.prototype[method] = overrides[method];
        }
      }
      return controller;
    }
  };
});