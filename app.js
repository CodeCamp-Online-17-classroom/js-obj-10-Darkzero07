let key = prompt("Enter fruit name:");
let obj = {};
while (key !== "stop") {
    let val = prompt(`Number of ${key} :`);
    let many = parseInt(val) > 1 ? key+"s" : key;
    obj[many] = val;
    key = prompt('fruit name:');
};
console.log(obj);