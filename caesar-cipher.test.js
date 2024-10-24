import caesarCipher from "./caesar-cipher";
test("function takes string and shift factor, returning the shifted string.", () => {
  let actual = caesarCipher("hello", 4);
  let expected = "lipps";
  expect(actual).toBe(expected);
});

test("function correctly wraps the cipher from z -> a", () => {
  let actual = caesarCipher("xyz", 3);
  let expected = "abc";
  expect(actual).toBe(expected);
});

test("function preserves character cases.", () => {
  let actual = caesarCipher("HeLLo", 3);
  let expected = "KhOOr";
  expect(actual).toBe(expected);
});

test("function preserves punctuation, spaces, and non-alphabetical characters.", () => {
  let actual = caesarCipher("Hello, World!", 3);
  let expected = "Khoor, Zruog!";
  expect(actual).toBe(expected);
});
