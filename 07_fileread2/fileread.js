const fs = require("fs");

let fileData = "No data";
fs.readFile("data.txt", "utf-8", (err, data) =>{
    if(err){
        console.log("Error reading data");
        return;
    }
    fileData = data;
    console.log("From function\n", data);
});

console.log(fileData);
//readfile is asyns
//the file reading task is handed over and control moves to the next line
//asynchronus




// const fileData = fs.readFileSync("data.txt", "utf-8");
// synchrous
// the next line is not executed till the file has been read