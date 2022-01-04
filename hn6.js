var http = require('http')

var server = http.createServer(function(req,res){
    if(req.url == '/')
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Default Page!!</h1>");
    }
    else if(req.url == '/student')
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Student Page!!</h1>");
    }
    else
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Admin Page!!</h1>");
    }
}).listen(3000);
console.log("Server started on 3000 port");