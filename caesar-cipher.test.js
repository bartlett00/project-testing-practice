import caesarCipher from "./caesar-cipher";
test("function takes string and shift factor, returning the shifted string.", () => {
  let actual = caesarCipher("hello world!", 4);
  let expected = "lipps asvph!";
  expect(actual).toBe(expected);
});

test("function correctly wraps the cipher from z -> a", () => {
  let actual = caesarCipher("xyz", 3);
  let expected = "abc";
  expect(actual).toBe(expected);
});
