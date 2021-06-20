const twoSum = require("./twoSum");

test("[1, 4, 4, 7] => [0, 1]", () => {
  expect(twoSum([1, 4, 4, 7], 5)).toStrictEqual([0, 1]);
});
