define(function(require){
    var CompoundView = require('framework/dumafajees/base/views/compoundView');
    var SimpleButtonView = require('../../buttons/simple/simpleButtonView');
    var Registry = require('framework/registry');
    var Vent = require('framework/vent');

    return CompoundView.extend({
      className:'region',
      initialize: function(){
        this.el.addEventListener('drop', this.handleDragDrop.bind(this));
        this.el.addEventListener('dragover', this.handleDragOver.bind(this));
      },
      handleDragDrop: function(e){
        var id = e.dataTransfer.getData("text/plain");
        this.updateModel(id);
        e.preventDefault();
      },
      updateModel: function(id){
        var modelConstructor = Registry.get([id + 'Model']);
        var viewConstructor = Registry.get([id]);
        var instance = new modelConstructor();
        var dataView = new viewConstructor({model:instance});
        dataView.render();
        this.model.get('items').push(instance);
        this.$el.append(dataView.el);
        Vent.trigger('dumafajee:dropped', instance);
      },
      handleDragOver: function(e){
        e.preventDefault();
      }
    });
  }
);