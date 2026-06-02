import fs from 'node:fs';

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('First line of output\n');
writeStream.write('Second line of output\n');
writeStream.write('Third line of output\n');

//Signal that no more data will be written
writeStream.end('Final line - stream closed after this\n');

writeStream.on("finish", () =>{
    console.log("All data has been written to output.txt");
    
    //verify by reading the file
    const content = fs.readFileSync('output.txt', 'utf8');
    console.log("\nFile contents");
    console.log(content);
});

writeStream.on("error", (err) =>{
    console.error("Write error: ", err.message);
});