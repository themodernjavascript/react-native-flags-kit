const utils = require("../src/utils");

test("should find best size, when greater", () => {
  expect(utils.findBestSize(17)).toBe(16);
});

test("should find best size, when equal", () => {
  expect(utils.findBestSize(24)).toBe(24);
});

test("should find best size, when lower", () => {
  expect(utils.findBestSize(29)).toBe(32);
});

test("should find best size, when higher than max size", () => {
  expect(utils.findBestSize(70)).toBe(64);
});

test("should handle null input", () => {
  expect(utils.findBestSize(null)).toBe(64);
});

test("should handle undefined input", () => {
  expect(utils.findBestSize()).toBe(64);
});
