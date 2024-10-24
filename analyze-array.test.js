import analyzeArray from "./analyze-array";

test("function returns an object with the following properties: average, min, max, and length.", () => {
  let actual = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(actual.average).toBeDefined();
  expect(actual.min).toBeDefined();
  expect(actual.max).toBeDefined();
  expect(actual.length).toBeDefined();
});

test("returned properties are mathematically accurate.", () => {
  let actual = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(actual.average).toBe(4);
  expect(actual.min).toBe(1);
  expect(actual.max).toBe(8);
  expect(actual.length).toBe(6);
});
