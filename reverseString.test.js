import reverseString from "./reverseString";

test("returns string reversed", () => {
  let actual = reverseString("test");
  let expected = "tset";
  expect(actual).toBe(expected);
});

test("reverses unique strings", () => {
  let actual = reverseString("unique");
  let expected = "euqinu";
  expect(actual).toBe(expected);
});
