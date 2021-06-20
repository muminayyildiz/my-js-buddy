/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let counts = new Map();
  for (let i = 0; i < nums.length; i++) {
    let count = counts.has(nums[i]) ? counts.get(nums[i]) + 1 : 1;
    counts.set(nums[i], count);
  }
  for (let [key, value] of counts.entries()) {
    if (value === 1) {
      return key;
    }
  }
};

module.exports = singleNumber;
