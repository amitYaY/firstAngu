var xprs = require('express');
var routes = xprs.Router();

var user = require('../controller/userController.js');

routes.get('/userInfo',user.getInfo);

module.exports=routes;
