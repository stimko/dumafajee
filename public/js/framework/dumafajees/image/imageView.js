define(['framework/dumafajees/base/views/baseView'], 
  function(BaseView){
    return BaseView.extend({
      tagName: 'img',
      render: function() {
        this.el.setAttribute('src', this.model.get('content'));
      }
    });
  }
);