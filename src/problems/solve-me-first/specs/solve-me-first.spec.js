const solve = require("../index");

describe("Solve Me First", () => {
  eachFile(__dirname, (fileName, input, output) => {
    test(`Test Case: ${fileName}`, () => {
      expect(solve(input)).toEqual(output);
    });
  });
});
