define(['framework/dumafajees/base/views/compoundView'],
  function(CompoundView){
    return CompoundView.extend({
      className:['content', CompoundView.prototype.className].join(' ')
    });
  }
);