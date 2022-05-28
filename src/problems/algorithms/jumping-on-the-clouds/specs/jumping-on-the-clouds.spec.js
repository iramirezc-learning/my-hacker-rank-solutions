const solve = require("../index");

describe("Jumping on the Clouds", () => {
  eachFile(__dirname, (fileName, input, output) => {
    test(`Test Case: ${fileName}`, () => {
      expect(solve(input)).toEqual(output);
    });
  });
});
