const fs = require("fs");
const http = require("http");
const path = require("path");

const root = __dirname;
const port = 3000;
const types = {
  ".html": "text/html;charset=utf-8",
  ".css": "text/css;charset=utf-8",
  ".js": "text/javascript;charset=utf-8"
};

http.createServer((request, response) => {
  const requested = request.url === "/" ? "index.html" : request.url.split("?")[0];
  const filePath = path.join(root, requested);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, { "content-type": types[path.extname(filePath)] || "text/plain;charset=utf-8" });
    response.end(content);
  });
}).listen(port, "127.0.0.1", () => {
  console.log(`Exam site running at http://127.0.0.1:${port}/`);
});
