const fs = require("fs");

function myReadFile(){
    console.log("Before Reading");
    fs.readFile("demo.txt", "utf8", (err,data) => {
        if(err){
            console.log("Error reading file: ",err.message);
        }
        else{
            console.log(data);
        }
    }
);
    console.log("After reading")
}

myReadFile();