const path = require("path");

const filePath = path.resolve("config.json");
console.log(filePath);
console.log("Basename: ", path.basename(filePath));
console.log("Basename ( no extension): ", path.basename(filePath, ".json"))
console.log("Folder name: ", path.dirname(filePath));
console.log("Extention name: ", path.extname(filePath));

console.log(path.parse(filePath));
