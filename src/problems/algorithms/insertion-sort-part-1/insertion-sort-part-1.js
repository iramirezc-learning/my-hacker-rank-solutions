/**
 * Insertion Sort - Part 1
 * @param {number} n
 * @param {Array<number>} arr
 * @returns {Array<Array<string>>}
 */
function insertionSort1(n, arr) {
  const last = arr[n - 1];
  const result = [];

  for (let i = n - 1; i >= 0; i--) {
    if (last < arr[i - 1]) {
      arr[i] = arr[i - 1];
      result.push(arr.join(" "));
    } else {
      arr[i] = last;
      result.push(arr.join(" "));
      break;
    }
  }

  return result;
}

module.exports = insertionSort1;
