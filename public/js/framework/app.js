define(function(require){
  var ModelMapping = require('framework/registry/model/modelMapping');
  var ViewMapping = require('framework/registry/view/viewMapping');
  var TemplateBuilderController = require('./templateBuilder/templateBuilderController');
  return {
    init: function(){
      var templateBuilderController = new TemplateBuilderController();
    }
  };
});