var userModel = require('../model/userInfo');
module.exports.getInfo = function(req, res){
userModel.find().exec(function(err,result){
  console.log(result);
});
}
