import fs from "node:fs";
import zlib from "zlib";
import { pipeline } from "node:stream";

pipeline(
    fs.createReadStream("large-file.txt"),
    zlib.createGzip(),
    fs.createWriteStream("large-file-copy.gz"),
    (err) => {
        if(err){
            console.log("Pipeline failed");
        }
        else{
            console.log("File compressed");
        }
    }
)

