import fs from 'node:fs';

const filePath = 'large-file.txt';
const writeStream = fs.createWriteStream(filePath);

for (let i=0; i < 1_000_000; i++){
    writeStream.write(
        `Line ${i + 1}: This is sample data for demonstrating streams in Node.js\n`
    );
}

writeStream.end(()=>{
    const stats = fs.statSync(filePath);
    console.log(stats);
});