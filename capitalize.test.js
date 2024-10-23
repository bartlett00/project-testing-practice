import capitalize from "./capitalize";

test("returns first character capitalized", () => {
  let actual = capitalize("test");
  let expected = "Test";

  expect(actual).toBe(expected);
});

test("returns first character capitalizeed for unique inputs", () => {
  let actual = capitalize("newtest");
  let expected = "Newtest";

  expect(actual).toBe(expected);
});
