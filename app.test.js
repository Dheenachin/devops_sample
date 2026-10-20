const { test } = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const server = require("./app");

test("GET / returns a welcome message", async () => {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/`);
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.match(body.message, /DevOps sample app is running/);
  } finally {
    await new Promise((resolve, reject) => server.close((err) => err ? reject(err) : resolve()));
  }
});
