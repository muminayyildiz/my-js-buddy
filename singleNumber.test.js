const singleNumber = require("./singleNumber");

test("5 is single number", () => {
  expect(singleNumber([1, 4, 4, 1, 5])).toBe(5);
});

test("1 is single number", () => {
  expect(singleNumber([1, 4, 4, 4, 4])).toBe(1);
});

test("3 is single number", () => {
  expect(singleNumber([1, 4, 1, 4, 4, 3])).toBe(3);
});
