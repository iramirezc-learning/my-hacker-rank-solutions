/**
 * Insertion Sort - Part 2
 * @see {@link https://www.hackerrank.com/challenges/insertionsort2/problem}
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

function exchange(arr, i, j) {
  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

function toString(result) {
  return result.join("\n");
}

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const n = parseInt(input.shift(), 10);
  const arr = input[0]
    .trim()
    .split(" ")
    .map((n) => parseInt(n, 10));

  return toString(insertionSort2(n, arr));
}

module.exports = main;
