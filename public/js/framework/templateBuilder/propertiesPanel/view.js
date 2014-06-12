define(function(require){
    var SimplePanelView = 'framework/dumafajees/panel/simple/view';
    var PropertiesTemplate = 'tpl!./properties.tpl';
    return SimplePanelView.extend({
      template: PropertiesTemplate
    });
  }
);