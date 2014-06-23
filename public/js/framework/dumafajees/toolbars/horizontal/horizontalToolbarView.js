define(function(require){
    var CompoundView = require('framework/dumafajees/base/views/compoundView');
    return CompoundView.extend({
      className: ['hori-toolbar', CompoundView.prototype.className].join(' ')
    });
  }
);