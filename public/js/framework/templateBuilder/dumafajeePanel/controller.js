define(function(require){
  var $ = require('jquery');
  var CompoundPanelModel = require('framework/dumafajees/panel/group/model');
  var CompoundPanelView = require('framework/dumafajees/panel/group/view');
  var HeaderRegionModel = require('framework/dumafajees/regions/header/model');
  var HeaderRegionView = require('framework/dumafajees/regions/header/view');
  var DefaultTemplateModel = require('framework/dumafajees/templates/model');
  var DefaultTemplateView = require('framework/dumafajees/templates/view');
  var Marionette = require('marionette');

  return Marionette.Controller.extend({
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