define(function(require){
  var dumafajeeMapping = require('framework/dumafajeeMapping');
  var TemplateBuilderController = require('./templateBuilder/templateBuilderController');
  return {
    init: function(){
      var templateBuilderController = new TemplateBuilderController();
    }
  };
});