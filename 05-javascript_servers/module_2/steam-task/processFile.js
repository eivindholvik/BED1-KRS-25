const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

// Transform stream to convert text to uppercase
const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

console.log('Processing file...');

const inputStream = fs.createReadStream(inputPath);
const outputStream = fs.createWriteStream(outputPath);

inputStream
  .pipe(uppercaseTransform)
  .pipe(outputStream)
  .on('finish', () => {
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    console.log('File processing complete.');
    console.log(`Input file size: ${inputSize} bytes`);
    console.log(`Output file size: ${outputSize} bytes`);
  });
