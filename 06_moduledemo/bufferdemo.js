const buf1 = Buffer.from("Hello from Node.js");
console.log("From String: ", buf1);
console.log("Length in bytes: ", buf1.length);
console.log("In text: ", buf1.toString());

const buf2 = Buffer.from([45, 666, 22, 44, 6]);
console.log("From number array: ",buf2);
console.log("Length in bytes: ",buf2.length);
console.log("In text: ",buf2.toString());