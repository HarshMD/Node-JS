import fs from "node:fs";
import zlib from "zlib";

const readStream = fs.createReadStream("large-file.txt");
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream("large-file-copy.gz");

readStream.pipe(gzip).pipe(writeStream); //pipe will handle the backpressure

writeStream.on("finish", () => {
    console.log("File compressed");
    const os = fs.statSync("large-file.txt").size;
    const comp = fs.statSync("large-file-copy.gz").size;
    const ratio = (os/comp).toFixed(2)*100;

    console.log(`${os} bytes compressed to ${comp} bytes`);
    console.log(`File reduced by ${ratio}%`);
});
readStream.on("error", (err) => console.log("Read error: ", err.message));
writeStream.on("error", (err) => console.log("Write error: ", err.message));

