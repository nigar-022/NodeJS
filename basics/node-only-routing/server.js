var http = require("http");
var app = require("./app");

http.createServer(app.handleRquest).listen(8000);
