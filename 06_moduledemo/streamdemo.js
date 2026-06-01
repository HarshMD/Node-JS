/* 
Stream: A lpcation where data flows (old data is removed and new data is put as and when needed)

networkstream, filestream, memorystream
*/

import fs from 'node:fs';

const filePath = 'large-file.txt';
const before = process.memoryUsage().rss;

const readStream = fs.createReadStream(filePath, {encoding:"utf8"});

readStream.on("data", (chunk) => {

});

readStream.on("end", () => {
    const after = process.memoryUsage().rss;
    console.log((after - before) / 1024 / 1024 + "MB");
});