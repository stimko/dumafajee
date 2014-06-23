define(['framework/dumafajees/base/views/compoundView'], 
  function(CompoundView){
    return CompoundView.extend({
      className: ['group-panel', CompoundView.prototype.className].join(' ')
    });
  }
);