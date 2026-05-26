
const name = process.argv.slice(2);
if(!name || name == ""){
    console.log("No name provided");
    process.exit(1);
    //1 is just a code for windows
    //it is a good practice is use exit
}
else{
    console.log(`Hello ${name}`);
}

console.log("Listing all parameters");
process.argv.forEach((param,idx)=> console.log(`${idx}:${param}`));

