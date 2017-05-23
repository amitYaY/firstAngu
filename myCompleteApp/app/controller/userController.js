var userModels = require('../model/userInfo');
module.exports.getInfo = function(req, res){
userModels.find().exec(function(err,result){
  console.log(result);
  res.status(200).send(result);
});
}
