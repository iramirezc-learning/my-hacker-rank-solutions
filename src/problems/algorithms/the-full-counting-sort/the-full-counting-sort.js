/**
 * The Full Counting Sort
 * @param {Array<Array<string>>} arr
 * @returns {Array<string>}
 */
function countSort(arr) {
  const n = arr.length;
  const mid = Math.floor(n / 2);
  const count = [];
  const sorted = [];

  for (let i = 0, tuple, x, s; i < n; i++) {
    tuple = arr[i];
    x = parseInt(tuple[0], 10);
    s = i < mid ? "-" : tuple[1];

    if (!count[x]) {
      count[x] = [];
    }

    count[x].push(s);
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i]) {
      sorted.push(count[i].join(" "));
    }
  }

  return sorted;
}

module.exports = countSort;
