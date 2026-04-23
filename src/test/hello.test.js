const test = require("node:test");
const assert = require("node:assert");
const { hello } = require("../src/hello");

test("hello returns expected message", () => {
  assert.strictEqual(hello("AppTracking"), "Hello, AppTracking!");
});