const fs = require('fs');
const path = require('path');
const { Transform } = require('node:stream');

const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

// Transform stream to convert text to uppercase
const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    try {
      this.push(chunk.toString().toUpperCase());
      callback();
    } catch (error) {
      callback(error);
    }
  },
});

// Transform stream to filter out lines containing value of filterWord

const filterWord = "random";
const filterTransform = new Transform({
  transform(chunk, encoding, callback) {
    try {
      const filteredData = chunk
        .toString()
        .split('\n')
        .filter(line => !line.includes(filterWord.toUpperCase()))
        .join('\n');
      this.push(filteredData);
      callback();
    } catch (error) {
      callback(error);
    }
  },
});

// Start timing the process
const startTime = Date.now();

console.log('Starting file processing...');

const inputStream = fs.createReadStream(inputPath);
const outputStream = fs.createWriteStream(outputPath);

inputStream
  .pipe(uppercaseTransform) // Convert text to uppercase
  .pipe(filterTransform)    // Remove lines containing "random"
  .pipe(outputStream)       // Write the result to the output file
  .on('finish', () => {
    const endTime = Date.now();
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    console.log('File processing complete.');
    console.log(`Input file size: ${inputSize} bytes`);
    console.log(`Output file size: ${outputSize} bytes`);
    console.log(`Processing time: ${endTime - startTime}ms`);
  })
  .on('error', (err) => {
    console.error('An error occurred during file processing:', err.message);
  });
