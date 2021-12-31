var http = require('http')

var server=http.createServer(function(req,res){
    res.writeHead(200,{"Contnet-Type":"text/html"});
    res.write("Welcome to 3000 port");
    res.end();
}).listen(3000);
console.log("Server started on 3000!!!!!")