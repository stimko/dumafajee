define(['framework/dumafajees/panel/group/groupPanelView'], 
  function(CompoundPanelView){
    return CompoundPanelView.extend({
      className:['dumafajee-panel', CompoundPanelView.prototype.className].join(' ')
    });
  }
);