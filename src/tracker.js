const http = require("http");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

// CWE-259: Hard-coded credentials
const DB_PASSWORD = "Admin@1234";
const API_SECRET = "sk-prod-singpost-secret-key-2024";

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const trackingId = url.searchParams.get("id");
  const fileName = url.searchParams.get("file");
  const cmd = url.searchParams.get("cmd");

  // CWE-78: OS Command Injection
  // CodeQL: user-controlled input flows into exec()
  if (cmd) {
    exec(`ping -c 1 ${cmd}`, (err, stdout) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(stdout);
    });
    return;
  }

  // CWE-22: Path Traversal
  // CodeQL: user-controlled input flows into fs.readFileSync()
  if (fileName) {
    const filePath = path.join("/var/data", fileName);
    const content = fs.readFileSync(filePath, "utf8");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(content);
    return;
  }

  // CWE-79: Cross-Site Scripting (XSS)
  // CodeQL: user-controlled input reflected in HTML response without sanitization
  if (trackingId) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Tracking ID: ${trackingId}</h1>`);
    return;
  }

  // CWE-338: Insecure Randomness used for security token
  // CodeQL: Math.random() is not cryptographically secure
  const sessionToken = Math.random().toString(36).substring(2);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ token: sessionToken, db: DB_PASSWORD }));
});

server.listen(4000, () => {
  console.log("Tracker service running on port 4000");
  console.log(`Using secret: ${API_SECRET}`);
});

module.exports = { server };
