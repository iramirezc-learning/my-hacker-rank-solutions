const solve = require("../index");

describe("Compare the Triplets", () => {
  eachFile(__dirname, (fileName, input, output) => {
    test(`Test Case: ${fileName}`, () => {
      expect(solve(input)).toEqual(output);
    });
  });
});
