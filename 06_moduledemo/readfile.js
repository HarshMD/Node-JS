import fs from 'node:fs';

const filePath = 'large-file.txt';
const before = process.memoryUsage().rss;

fs.readFile(filePath, "utf8", (err, data) =>{
    if(err) throw err;

    const after = process.memoryUsage().rss;
    const used = after - before;
    console.log("Memory used in MB: ", (used / 1024 / 1024).toFixed(2));
})