/*
npm install -g typescript
-g global - no need to install for every project
-D dev 

npm root -g
npm list -g --depth=0
npm list --depth=0 

npm update - updates all packages to the "allowed version"
npm outdated - list packages that need updates
npm update --dry-run - does not update only shows what would be updated
npm audit - checks packages for security vulnerabilities

if vulnerabilities are found - run
npm audit fix
to tyr fix them with updated


    "@types/node": "^25.6.0",
    "nodemon": "^3.1.14",
    "ts-node": "^10.9.2",
    "typescript": "^6.0.3"

    "nodemon": "^3.1.14",
    Here 3 is major version:
        1 is minor:
        14 is patch:

        14->15 You fixed an error in the app without changing functionality
        1->2 New features -> code will work with old versions
        3->4 Major change version 3 code will not work with version 4 code

        "nodemon": "3.1.14"
        this app only works with this exact version (it wont even work with 3.1.15)
        "nodemon": "~3.1.14" (patch level flexibility)
        this app only works in the range 3.1.0 to 3.1.XX
        "nodemon": "^3.1.4" (minor level flexibility)
        this app will work in the range of 3.XX.XX

        npm update, npm audit fix - obey these rules

        to force an update -> npm audit fix --force
*/

import myReadFile from "../dist/fileread.js";
myReadFile();

import chalk = require("chalk/index.js");
console.log("Hello");
console.log(chalk.red("Hi"));


