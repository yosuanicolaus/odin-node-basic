const http = require("http");
const fs = require("fs");

function getFile(path) {
  switch (path) {
    case "/":
      return "index.html";
    case "/about":
      return "about.html";
    case "/contact-me":
      return "contact-me.html";
    default:
      return "404.html";
  }
}

http
  .createServer((req, res) => {
    const file = getFile(req.url);
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  })
  .listen(3000);
