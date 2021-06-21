const constructRectangle = require("./constructRectangle");

test("4 area is [2, 2]", () => {
  expect(constructRectangle(4)).toStrictEqual([2, 2]);
});
