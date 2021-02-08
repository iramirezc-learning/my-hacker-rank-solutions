const solvers = require("../index");

describe.only("Big Sorting", () => {
  describe("using Quick Sort", () => {
    eachFile(__dirname, (fileName, input, output) => {
      test(`Test Case: ${fileName}`, () => {
        expect(solvers.quickSort(input)).toEqual(output);
      });
    });
  });

  describe("using JS native sort", () => {
    eachFile(__dirname, (fileName, input, output) => {
      test(`Test Case: ${fileName}`, () => {
        expect(solvers.jsSort(input)).toEqual(output);
      });
    });
  });
});
