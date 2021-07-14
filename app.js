const fs = require('fs');

let strings = fs.readFileSync('./sourse.txt'),
    fibonacci = [];

strings = strings.toString();
strings = strings.split("\n");

console.log(strings.length)
if (strings.length > 0) fibonacci = createFibonacci(strings.length);




function createFibonacci(length) {
    let arr = [0, 1];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i] + arr[i + 1];
        if (length <= arr[arr.length - 1]) break;
        arr.push(item);
    }
    return arr;
}