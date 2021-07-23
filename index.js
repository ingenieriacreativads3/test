//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world');
});
//listen to port 3000 by default chinga
let port = process.env.PORT || 8081
console.log('hello world') // nuevo port
console.log('listen in port ' + port) // nuevo port
app.listen(process.env.PORT || 8081);
 
module.exports = app;
