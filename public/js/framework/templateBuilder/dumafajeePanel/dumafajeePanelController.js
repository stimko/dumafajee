define(function(require){
  var $ = require('jquery');
  var DumafajeePanelModel = require('./dumafajeePanelModel');
  var DumafajeePanelView = require('./dumafajeePanelView');
  var HeaderRegionView = require('framework/dumafajees/regions/header/headerRegionView');
  var DefaultTemplateView = require('framework/dumafajees/templates/templateView');
  var Controller = require('framework/controller');
  var DraggableViewMixin = require('framework/dumafajees/base/mixins/draggableView');

  return Controller.extend({
    initialize: function(opts) {
      this.cb = opts.cb;
      this.setupPanel();
    },
    setupPanel: function() {
      var dumafajeePanelModel = new DumafajeePanelModel();
      var wow = dumafajeePanelModel.fetch({success:function(model, response, opts){
        var designDumafajeePanelView = DumafajeePanelView.extend(DraggableViewMixin);
        var compoundPanelView = new designDumafajeePanelView({
          model:model,
          $container:'body'
        });
        this.cb();
      }.bind(this)});
    }
  });
});