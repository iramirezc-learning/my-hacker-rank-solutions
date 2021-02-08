/**
 * The Full Counting Sort
 * @see {@link https://www.hackerrank.com/challenges/countingsort4/problem}
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

function toString(arr) {
  return arr.join(" ");
}

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  input.shift(); // get rid of the first number
  const arr = input.map((line) => line.trim().split(" "));

  return toString(countSort(arr));
}

module.exports = main;
