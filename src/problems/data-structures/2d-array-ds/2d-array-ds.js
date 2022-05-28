/**
 * 2D Array - DS
 * @param {Array<Array<number>>} arr
 * @returns {number}
 */
function array2d(arr) {
  let max = null;

  for (let y = 1; y < arr.length - 1; y++) {
    for (let x = 1; x < arr.length - 1; x++) {
      let hourglass =
        arr[y - 1][x - 1] +
        arr[y - 1][x] +
        arr[y - 1][x + 1] +
        arr[y][x] +
        arr[y + 1][x - 1] +
        arr[y + 1][x] +
        arr[y + 1][x + 1];

      if (max === null || hourglass > max) max = hourglass;
    }
  }

  return max;
}

module.exports = array2d;
