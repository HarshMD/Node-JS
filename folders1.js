const fs = require("fs/promises");
const path = require("path");

async function createDirs(){
    await fs.mkdir("logs");
    console.log("Created folder logs");
    //path.json => data\users\profiles
    //I want to create all these folders at the same time
    await fs.mkdir(path.join("data", "user", "profiles"), {recursive:true});
}
createDirs();