define(['../base/baseView', 'tpl!./headerRegion.tpl'], 
  function(BaseView, TemplateTpl){
    return BaseView.extend({
      tagName:'header',
      template: HeaderTpl,
      getItemView: function(item) {
        
      },
      render: function() {

      }
    });
  }
);