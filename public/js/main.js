requirejs.config({
    baseUrl:'js/vendor',
    paths: {
      jquery: 'jquery',
      backbone: 'backbone',
      marionette: 'backbone.marionette',
      underscore: 'underscore',
      framework: '../framework',
      rivets: 'rivets',
      tpl:'tpl'
    },
    map: {
      // '*' means all modules will get private versions
      // for their dependency.
      '*': { 
        'backbone': 'backbone-private'
      },

      // '*-private' wants the real module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      'backbone-private': {'backbone': 'backbone'}
    }
});

requirejs(['framework/app'],
  function(Framework) {
    Framework.init();
});