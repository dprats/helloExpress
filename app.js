
/**
 * Module dependencies.
 */

var express = require('express');
// var routes = require('./routes');
// var user = require('./routes/user');
var http = require('http');
// var path = require('path');

var app = express();

// all environments

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.use(express.bodyParser());

})


app.get('/', function(req,res){
	res.send("hello, Express");
});

app.get('/hi', function(req,res){
	var messages = [
		"<h1 Hello, Express</h1>",
		"<p> Welcome to Building Web Apps with express </p>"].join("\n");

	res.send(messages);

});

// app.get('/users/:userId',function(req,res){
// 	res.send("<h1>Hello, User #" + req.params.userId +"!");

// });

app.post('/users', function(req,res){
	res.send('Creating a new user with name' + req.body.username + ".");
});

//app.put /users/:iserId
//app.delete /users/:userId

app.get(/\/users\/(\d*)\/?(edit)?/, function(req,res){
	//users/10
	//users/10/edit
	//users/10/

	var message = "user #" + req.params[0] + "s profile";
	if (req.params[1] == 'edit'){
		message = "Editing " + message;
	} else {
		message = "Viewing " + message;
	}

	res.send(message);

});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
