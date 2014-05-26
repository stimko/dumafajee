define(function(require){
  var $ = require('jquery');
  var HeaderRegionModel = require('framework/dumafajees/regions/header/model');
  var ContentRegionModel = require('framework/dumafajees/regions/content/model');
  var DefaultTemplateModel = require('framework/dumafajees/templates/model');
  var DefaultTemplateView = require('framework/dumafajees/templates/view');
  var PanelController = require('./dumafajeePanel/controller');
  var Marionette = require('marionette');
  var MarionetteApp = require('framework/marionetteApp');

  return Marionette.Controller.extend({
    initialize: function() {
      var panelController = new PanelController({
        cb:function(){this.configureTemplate()}.bind(this)
      });
    },
    configureTemplate: function() {
      var defaultTemplate = new DefaultTemplateModel();
      var headerRegionModel = new HeaderRegionModel();

      defaultTemplate.get('items').push(headerRegionModel);
      var defaultTemplateView = new DefaultTemplateView({model:defaultTemplate});
      defaultTemplateView.render();

      $('#save').on('click', function(){
        console.log(defaultTemplate);
      }.bind(this));

      $('body').append([defaultTemplateView.el]);
    }
  });
});