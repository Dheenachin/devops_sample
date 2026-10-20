
const http = require("node:http");

const PORT = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const pathname = new URL(req.url, "http://localhost").pathname;

  if (pathname === "/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      status: "ok",
      service: "devops-sample-webapp"
    }));
  }

  if (pathname === "/") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      message: "Hello bro! Your DevOps sample app is running.",
      version: "1.0.0",
      endpoints: ["/", "/health"]
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Not found" }));
});

if (require.main === module) {
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`App listening on port ${PORT}`);
  });
}

module.exports = server;
