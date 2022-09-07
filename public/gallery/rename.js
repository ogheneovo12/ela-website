const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(".");

files.forEach((file, index) => {
  const oldPath = `./${file}`;
  const newPath = `./gallery_${index + 1}${path.extname(file)}`;
  if (path.extname(file) !== ".js") {
    fs.rename(oldPath, newPath, (err) => console.log(err));
  }
});
