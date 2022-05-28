function exchange(arr, i, j) {
  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * Insertion Sort - Part 2
 * @param {number} n
 * @param {Array<number>} arr
 * @returns {Array<string>}
 */
function insertionSort2(n, arr) {
  const result = [];

  for (let c = 1; c < n; c++) {
    let j = c;
    let i = j - 1;

    if (arr[j] > arr[i]) {
      result.push(arr.join(" "));
      continue;
    }

    while (arr[j] < arr[i] && i >= 0) {
      exchange(arr, i--, j--);
    }

    result.push(arr.join(" "));
  }

  return result;
}

module.exports = insertionSort2;
