import fs from 'node:fs';

const readStream = fs.createReadStream("demodata.txt", {
    encodding: "utf8",
    highWaterMark: 1024 // how much data to read per chunk
});

let chunkCount = 0;

readStream.on("data", (chunk) =>{
    chunkCount++;
    console.log("Chunk Count: ", chunkCount);
    console.log(chunk)
});

readStream.on("end", () =>{
    console.log("Done");
});

readStream.on("error", (err) =>{
    console.error("Error: ", err.message);
});