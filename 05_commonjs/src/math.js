function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

let count = 0;
function increment(){
    count++;
    return count;
}

console.log("Math library loaded");

module.exports = {
    add, subtract, increment
};