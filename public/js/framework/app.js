define(function(require){
  var registry = require('./registry');
  var MarionetteApp = require('./marionetteApp');
  var TemplateBuilderController = require('./templateBuilder/templateBuilderController');

  return {
    init: function(){
      MarionetteApp.Registry = registry;
      var templateBuilderController = new TemplateBuilderController();
    }
  };
});