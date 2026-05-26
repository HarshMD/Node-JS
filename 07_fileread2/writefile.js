const fs = require("fs");
fs.writeFileSync("output.txt", "This file was created bt node.js");
const content = fs.readFileSync("output.txt", "utf-8");
console.log("Data written: ", content);