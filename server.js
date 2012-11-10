var http = require("http");
var url = require("url");

            //Grabs route var from router.js
function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " +pathname+ " Recieved.");    //print to console
        route(handle, pathname, response, request);
        
        
        //response.writeHead(200, {"Content-Type" : "text/plain"});
        //route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server Has Started at: 8888");
} // end start fxn

exports.start = start; 