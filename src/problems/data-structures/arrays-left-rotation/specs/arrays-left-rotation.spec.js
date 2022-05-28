const solve = require("../index");

describe("Arrays: Left Rotation", () => {
  eachFile(__dirname, (fileName, input, output) => {
    test(`Test Case: ${fileName}`, () => {
      expect(solve(input)).toEqual(output);
    });
  });
});
