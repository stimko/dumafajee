define(['../simple/simplePanelView'], 
  function(SimplePanelView){
    return SimplePanelView.extend({
      className: ['collapsible', SimplePanelView.prototype.className].join(' ')
    });
  }
);