const fs = require("fs/promises");

async function writeToFile() {
    await fs.appendFile("output.txt", new Date().toISOString() + " Testing ");
}
writeToFile();