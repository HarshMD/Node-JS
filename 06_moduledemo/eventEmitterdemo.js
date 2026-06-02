/* event driven archit
some event occurs - my code will run
in windows -> you inserted a USB drive -> an explorer popup will be shown
virus found -> anti virus will clean 
file downloaded -> notifications will be shown
*/

import EventEmitter from "node:events";

const myEmitter = new EventEmitter();

myEmitter.on("greet", () => {
    console.log("Hello from Event");
});
myEmitter.on("login", (username, timestamp) => {
    console.log(`User: ${username} logged in at ${timestamp}`);
});

console.log("Raising the event");
myEmitter.emit("greet");
console.log("Event Emitted");
myEmitter.emit("login", "Amit", new Date().toLocaleString());