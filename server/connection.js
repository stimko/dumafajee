var mongoose = require('mongoose');

module.exports = {
  connect:function(){
    var db = mongoose.connection;
    mongoose.connect('mongodb://stimko:stimko@ds031278.mongolab.com:31278/hookandloop');

    db.on('connected', function () {
      console.log('Mongoose default connection open');
    });

    db.on('error',function (err) {
      console.log('Mongoose default connection error: '.red + err);
    });

    process.on('SIGINT', function() {
      mongoose.connection.close(function () {
        console.log('\nMongoose default connection disconnected through app termination'.red);
        process.exit(0);
      });
    });
  }
}
