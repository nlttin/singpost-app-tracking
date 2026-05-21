import { describe, it, expect } from "vitest";

import { hello } from "../hello.js";

describe("hello()", () => {
  it("returns the default greeting when called without arguments", () => {
    expect(hello()).toBe("Hello, SingPost!");
  });

  it("returns a greeting using the given name", () => {
    expect(hello("AppTracking")).toBe("Hello, AppTracking!");
  });

  it("does NOT fall back to the default when the name is an empty string", () => {
    expect(hello("")).toBe("Hello, !");
  });

  it("preserves special characters in the name", () => {
    expect(hello("O'Brien")).toBe("Hello, O'Brien!");
    expect(hello("王五")).toBe("Hello, 王五!");
  });

  it("treats explicit undefined the same as no argument", () => {
    expect(hello(undefined)).toBe("Hello, SingPost!");
  });
});
