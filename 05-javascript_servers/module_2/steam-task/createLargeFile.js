const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'input.txt');
const writeStream = fs.createWriteStream(outputPath);

for (let i = 0; i < 1_000_000; i++) {
  writeStream.write(`Line ${i + 1}: This is some random text.\n`);
}

writeStream.end(() => {
  console.log(`Large file created at ${outputPath}`);
});