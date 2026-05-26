//environment variables

console.log("Path:");
let folders = process.env.PATH.split(";");
folders.forEach(folder => console.log(folder));
console.log("Temp folder:", process.env.TEMP);
console.log("Home Folder:", process.env.HOMEPATH);
console.log("Username:", process.env.USERNAME);
console.log("User Profile Folder Path:", process.env.USERPROFILE);
console.log("Application Data:", process.env.APPDATA);
console.log("Machine Name:", process.env.COMPUTERNAME);

//pattern to use in production
console.log("Node Environment:", process.env.Node_ENV || "developemnt");
//if NODE_ENV does not exist - always have a fallback value