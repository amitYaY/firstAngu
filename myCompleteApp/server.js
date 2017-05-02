var xprs = require('express'),
mongoose = require('mongoose'),
app = xprs();

var routes = require('./app/routes/routes.js');
app.use('/',routes);

mongoose.connect('mongodb://localhost/myCompleteAppDB');

app.use(xprs.static(__dirname+'/angularApp'));

// app.get('/',function(request,response){
//   response.status(200).send({
//     message:"Welcome!"
//   });
// });

app.listen(3131,function(){
  console.log("Server is started at 3131");
});
