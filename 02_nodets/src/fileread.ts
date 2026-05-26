import fs from "fs";

export function myReadFile(){
    const raw = fs.readFileSync("demo.txt", "utf8");
    console.log(raw);
    console.log(typeof(raw));
}