define(function(require){
  var $ = require('jquery');
  var CompoundPanelModel = require('framework/dumafajees/panel/group/groupPanelModel');
  var DumafajeePanelView = require('./dumafajeePanelView');
  var HeaderRegionModel = require('framework/dumafajees/regions/header/headerRegionModel');
  var HeaderRegionView = require('framework/dumafajees/regions/header/headerRegionView');
  var DefaultTemplateModel = require('framework/dumafajees/templates/templateModel');
  var DefaultTemplateView = require('framework/dumafajees/templates/templateView');
  var Controller = require('framework/controller');
  var DesignViewMixin = require('framework/dumafajees/base/mixins/designView');

  return Controller.extend({
    initialize: function(opts) {
      this.cb = opts.cb;
      this.setupPanel();
    },
    setupPanel: function() {
      var test = new CompoundPanelModel();
      var wow = test.fetch({success:function(model, response, opts){
        var designDumafajeePanelView = DumafajeePanelView.extend(DesignViewMixin);
        var compoundPanelView = new designDumafajeePanelView({
          model:model,
          $container:'body',
          draggable:true
        });
        this.cb();
      }.bind(this)});
    }
  });
});