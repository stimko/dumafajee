define(['framework/dumafajees/base/views/compoundView'],
  function(CompoundView){
    return CompoundView.extend({
      className:['content', 'layout', CompoundView.prototype.className].join(' ')
    });
  }
);