const bigSortingQuickSort = require("./big-sorting.quick-sort");
const bigSortingJSSort = require("./big-sorting.native-sort");

function toString(result) {
  return result.join("\n");
}

function main(inputAsString, solver) {
  const input = inputAsString.trim().split("\n");
  input.shift(); // ignore first line

  return toString(solver(input));
}

module.exports = {
  quickSort: (inputAsString) => main(inputAsString, bigSortingQuickSort),
  jsSort: (inputAsString) => main(inputAsString, bigSortingJSSort),
};
