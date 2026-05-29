const fs = require("fs/promises");

export default async function removeFolder() {
    await fs.rmdir("Dummy");
    //only removes empty folders

    await fs.rm("logs", {recursive:true});
    //remove a folder and all its contents
}