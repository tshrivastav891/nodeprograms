var http = require('http')
var result = require('./hn7')
var url = require('url')
var querystring = require('querystring')

var server = http.createServer(function(req,res){
    var query = url.parse(req.url).query;
    var fname = querystring.parse(query)['fname'];
    var lname = querystring.parse(query)['lname'];

    console.log(result.fname,result.lname)
console.log("Fname: ",result.fname);
console.log("Lname: ",result.lname);
}).listen(3000);
console.log("Server started on 3000 port ...");

