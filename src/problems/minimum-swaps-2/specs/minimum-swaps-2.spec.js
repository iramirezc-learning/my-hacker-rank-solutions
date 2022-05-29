const solve = require("../index");

describe("Minimum Swaps 2", () => {
  eachFile(__dirname, (fileName, input, output) => {
    test(`Test Case: ${fileName}`, () => {
      expect(solve(input)).toEqual(output);
    });
  });
});
