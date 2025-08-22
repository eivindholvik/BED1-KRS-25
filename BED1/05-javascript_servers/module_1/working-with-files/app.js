import fs from "fs";
import path from "path";


const folderName = "files";

if (!fs.existsSync(folderName)) {
  console.log(`The folder "${folderName}" does not exisit. Please create it and add some files to proceed.`);
  process.exit();
}

fs.readdir(folderName, (err, files) => {
  if (err) {
    console.error("Error reading the folder:", err.message);
    return;
  }
  console.log("Files in " + folderName + ":");
  // for (let i = 0; i < files.length; i++) {
  //   console.log(files[i]);
  // }
  files.forEach(file => {
    console.log(file);
  })
})


const filePath = path.join(folderName, "output.txt");

// const txt = "Something to be written";
// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName, { recursive: true });
//     console.log(`Folder "${folderName}" was created successfully!`);
//   }
// } catch (e) {
//   console.error("Error", err.message);
// }

// fs.appendFile("files/output.txt", txt + "\n", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//     return;
//   }
//   console.log("File written successfully!");
// })

// -------------- Reading files ------------------
let dataFromFile;

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file: ", err.message);
    return;
  }
  console.log(`Contents of "${filePath}:\n${data}`);
  dataFromFile = data;
})

// // Read image
// const imagePath = path.join(folderName, "image.avif");
// fs.readFile(imagePath, "", (err, data) => {
//   if (err) {
//     console.error("Error reading the image file: ", err.message);
//     return;
//   }
//   console.log(`Contents of "${imagePath}:\n${data}`);
// })


// Read html
fs.readFile("files/index.html", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the htmlfile: ", err.message);
    return;
  }
  console.log(`Contents of "files/index.html":\n${data}`);
})
