const fs = require("fs");
const path = require("path");

global.eachFile = (dirname, cb) => {
  const inputPath = path.join(dirname, "input");
  const outputPath = path.join(dirname, "output");
  const fileNames = fs.readdirSync(inputPath);

  fileNames.forEach((fileName) => {
    if (fileName.includes("skip")) return;

    const input = fs
      .readFileSync(path.join(inputPath, fileName))
      .toString()
      .trim();

    const output = fs
      .readFileSync(path.join(outputPath, fileName))
      .toString()
      .trim();

    cb(fileName, input, output);
  });
};
