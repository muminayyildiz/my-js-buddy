/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let rectangle = [];
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= Math.sqrt(area); i++) {
    if (area % i === 0) {
      let a = i;
      let b = area / i;
      let diff = Math.abs(a - b);
      if (diff < minDiff) {
        minDiff = diff;
        if (a <= b) {
          rectangle = [b, a];
        } else {
          return rectangle;
        }
      }
    }
  }
  return rectangle;
};

module.exports = constructRectangle;
