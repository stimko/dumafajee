define(function(require){
  var $ = require('jquery');
  var DumafajeePanelModel = require('./dumafajeePanelModel');
  var DumafajeePanelView = require('./dumafajeePanelView');
  var HeaderRegionView = require('framework/dumafajees/regions/header/headerRegionView');
  var DefaultTemplateView = require('framework/dumafajees/templates/templateView');
  var Controller = require('framework/controller');
  var DesignViewMixin = require('framework/dumafajees/base/mixins/designView');

  return Controller.extend({
    initialize: function(opts) {
      this.cb = opts.cb;
      this.setupPanel();
    },
    setupPanel: function() {
      var dumafajeePanelModel = new DumafajeePanelModel();
      var wow = dumafajeePanelModel.fetch({success:function(model, response, opts){
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