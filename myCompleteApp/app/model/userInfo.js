var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userInfoSchema = new schema({
  name:{
    type:String
  },
  userId:{
    type:String
  }
});

module.exports = mongoose.model('userModel',userInfoSchema);
