//import module - "http" 
var http = require("http")

// Port 0-65535


//create server
var server=http.createServer(function(request,response){
    //send response
    response.write("Hello from ritika kumari server :)");
    //end response
    response.end();
})

server.listen(3000,function(){
    console.log("Server is running on 3000");
});

