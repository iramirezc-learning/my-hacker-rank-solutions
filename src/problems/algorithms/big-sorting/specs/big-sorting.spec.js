const solvers = require("../index");

function parseInput(inputAsString) {
  const input = inputAsString.trim().split("\n");
  input.shift(); // ignore first line

  return [input];
}

function parseOutput(result) {
  return result.join("\n");
}

describe("Big Sorting", () => {
  eachSolver(solvers, (solver) => {
    eachFile(__dirname, (fileName, input, output) => {
      test(`Test Case: ${fileName}`, () => {
        const result = solver.apply(null, parseInput(input));

        expect(parseOutput(result)).toEqual(output);
      });
    });
  });
});
