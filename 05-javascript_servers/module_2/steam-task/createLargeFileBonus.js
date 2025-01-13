const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'input.txt');
const writeStream = fs.createWriteStream(outputPath);

const numberOfLines = 1_000_000;

for (let i = 0; i < numberOfLines; i++) {
  if (i % 3 === 0) {
    writeStream.write(`Line ${i + 1}: This is not "tilfeldig".\n`)
  } else {
    writeStream.write(`Line ${i + 1}: This is some random text.\n`);
  }
}

writeStream.end(() => {
  console.log(`Large file created at ${outputPath}`);
});