const path = require("path");

const filePath = path.join("Users", "vivek", "documents", "somefile.txt");
console.log(filePath);

const cleaned = path.join("users", "\\vivek", "../document", "notes.txt");
console.log(cleaned);

const abs1 = path.resolve("data", "users.json");
console.log("Resolve: ", abs1);
const abs2 = path.resolve("/temp", "logs", "app.log");
console.log("Resolve now: ", abs2);

console.log("Current folder / dierctory:", __dirname);

const configPath = path.resolve(__dirname, "config.json");
console.log("Config path: ", configPath);