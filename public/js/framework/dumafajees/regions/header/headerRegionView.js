define(['framework/dumafajees/base/views/compoundView'],
  function(CompoundView){
    return CompoundView.extend({
      tagName:'header',
      className: ['layout', CompoundView.prototype.className].join(' ')
    });
  }
);