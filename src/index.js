const http = require("http");
const { hello } = require("./hello");

const host = "0.0.0.0";
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`${hello("AppTracking")}\n`);
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});