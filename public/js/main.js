requirejs.config({
    baseUrl: 'js/vendor',
    paths: {
      jquery: 'jquery',
      backbone: 'backbone',
      marionette: 'backbone.marionette',
      underscore: 'underscore',
      framework: '../framework',
      tpl:'tpl'
    },
    map: {
      // '*' means all modules will get private versions
      // for their dependency.
      '*': { 
        'jquery': 'jquery-private', 
        'backbone': 'backbone-private',
        'underscore': 'underscore-private'
      },

      // '*-private' wants the real module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      'jquery-private': { 'jquery': 'jquery' },
      'backbone-private': {'backbone': 'backbone'},
      'underscore-private': {'underscore': 'underscore'}
    }
});

requirejs(['framework/framework'],
  function(Framework) {
    Framework.init();
});