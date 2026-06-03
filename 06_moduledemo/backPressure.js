import fs from 'node:fs';

const writeStream = fs.createWriteStream("backpressure.txt", {
    highWaterMark: 1024
});

let i = 0;
const writes = 10000;

function writeData(){
    let isOK = true;
    while(i < writes && isOK){
        i++;
        const data = `Entry ${i}, some data written to file\n`;

        if(i == writes){
            writeStream.end(data);
        }
        else{
            isOK = writeStream.write(data);
        }
    }
    if(i < writes){
        console.log("Drained");
        writeStream.once("drain", writeData);
    }
}

writeStream.on("finish", () => {
    console.log("Done");
})