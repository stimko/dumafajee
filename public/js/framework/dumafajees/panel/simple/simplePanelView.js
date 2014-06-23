define(['framework/dumafajees/base/views/compoundView'], 
  function(CompoundView){
    return CompoundView.extend({
      className: ['panel', CompoundView.prototype.className].join(' ')
    });
  }
);