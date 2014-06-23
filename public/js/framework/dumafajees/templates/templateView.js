define(['framework/dumafajees/base/views/compoundView'], 
  function(CompoundView){
    return CompoundView.extend({
      className:['template', CompoundView.prototype.className].join(' ')
    });
  }
);