import calculator from "./calculator";

test("calculator obj contains an add method", () => {
  expect(calculator.add).toBeDefined();
});
test("calculator obj contains a subtract method", () => {
  expect(calculator.subtract).toBeDefined();
});
test("calculator obj contains a divide method", () => {
  expect(calculator.divide).toBeDefined();
});
test("calculator obj contains a multiply method", () => {
  expect(calculator.multiply).toBeDefined();
});
test("add method returns sum of two numbers", () => {
  let actual = calculator.add(2, 2);
  let expected = 4;
  expect(actual).toBe(expected);
});
test("subtract method returns x - y", () => {
  let actual = calculator.subtract(2, 2);
  let expected = 0;
  expect(actual).toBe(expected);
});
test("divide method returns x/y", () => {
  let actual = calculator.divide(12, 2);
  let expected = 6;
  expect(actual).toBe(expected);
});
test("multiply method returns product of x and y", () => {
  let actual = calculator.multiply(5, 4);
  let expected = 20;
  expect(actual).toBe(expected);
});
