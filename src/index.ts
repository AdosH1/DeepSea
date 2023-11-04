import http from "http";
import fs from "fs";

http
  .createServer((req, res: http.ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const game = fs.readFileSync('./static/index.html').toString()
    res.write(game);
    res.end();
  })
  .listen(8080);

console.log("Server running at port 8080");
