define(function(require){
  var $ = require('jquery');
  var CompoundPanelModel = require('framework/dumafajees/panel/group/groupPanelModel');
  var CompoundPanelView = require('framework/dumafajees/panel/group/groupPanelView');
  var HeaderRegionModel = require('framework/dumafajees/regions/header/headerRegionModel');
  var HeaderRegionView = require('framework/dumafajees/regions/header/headerRegionView');
  var DefaultTemplateModel = require('framework/dumafajees/templates/templateModel');
  var DefaultTemplateView = require('framework/dumafajees/templates/templateView');
  var Controller = require('framework/controller');

  return Controller.extend({
    initialize: function(opts) {
      this.cb = opts.cb;
      this.setupPanel();
    },
    setupPanel: function() {
      var test = new CompoundPanelModel();
      var wow = test.fetch({success:function(model, response, opts){
        var compoundPanelView = new CompoundPanelView({model:model});
        compoundPanelView.render();
        $('body').append([compoundPanelView.el]);
        this.cb();
      }.bind(this)});
    }
  });
});