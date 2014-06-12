define(function(require){
  var TemplateBuilderController = require('./templateBuilder/templateBuilderController');

  return {
    init: function(){
      var templateBuilderController = new TemplateBuilderController();
    }
  };
});