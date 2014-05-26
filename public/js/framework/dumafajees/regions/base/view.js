define(function(require){
    var CompoundView = require('framework/dumafajees/base/views/compoundView');
    var SimpleButtonView = require('../../buttons/simple/view');
    var MarionetteApp = require('framework/marionetteApp');

    return CompoundView.extend({
      className:'region',
      initialize: function(){
        this.el.addEventListener('drop', this.handleDragDrop.bind(this));
        this.el.addEventListener('dragover', this.handleDragOver.bind(this));
      },
      handleDragDrop: function(e) {
        var id = e.dataTransfer.getData("text/plain");
        var modelConstructor = MarionetteApp.Registry[id + 'Model'];
        var viewConstructor = MarionetteApp.Registry[id];
        var instance = new modelConstructor();
        var dataView = new viewConstructor({model:instance});
        dataView.render();
        this.model.get('items').push(instance);
        this.$el.append(dataView.el);
        e.preventDefault();
      },
      handleDragOver: function(e) {
        e.preventDefault();
      }
    });
  }
);