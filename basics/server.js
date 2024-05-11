//One Way
var http = require("http");
var module1 = require("./module1");

// function onRequest(request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.write("Hello World");
//   response.end();
// }
// http.createServer(onRequest).listen(8000);

// second way

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(module1.name);
    module1.myFunction();
    response.end();
  })
  .listen(8000);
