const fs = require("fs/promises");
//the above is different from fs
async function readFile(){
    try{
        const content = await fs.readFile("output.txt", "utf-8");
        console.log("File contents: ", content);
    }
    catch(err){
        console.error("Error reading file: ", err.message);
    }
}

readFile();