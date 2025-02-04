var url = require("url");
var fs = require("fs");

function renderHTML(path, response) {
  fs.readFile(path, null, function (error, data) {
    if (error) {
      response.writeHead(404);
      response.write("File Not Found");
    } else {
      response.write(data);
    }
    response.end();
  });
}

module.exports = {
  handleRquest: function (request, resonse) {
    resonse.writeHead(200, { "Content-Type": "text/html" });
    var path = url.parse(request.url).pathname;

    switch (path) {
      case "/":
        renderHTML("./index.html", resonse);
        break;

      case "/login":
        renderHTML("./login.html", resonse);
        break;

      default:
        resonse.writeHead(404);
        resonse.write("Route not defined");
        resonse.end();
    }
  },
};
