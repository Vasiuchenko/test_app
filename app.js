const fs = require('fs');

// Read file and form an array

let strings = fs.readFileSync('./sourse.txt'),
    fibonacci = [],
    newString = [];

strings = strings.toString();
strings = strings.split("\r\n");

if (strings.length > 0) fibonacci = createFibonacci(strings.length);

// Create an array with filtered strings
for (let i = 0; i < fibonacci.length; i++) {
    let string = strings.filter((item, index) => index === fibonacci[i]);
    
    if(typeof string[0] === 'string') newString[i] = string[0];
}

//  Fibonacci sequence
function createFibonacci(length) {
    let arr = [0, 1];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i] + arr[i + 1];
        
        if (length <= arr[arr.length - 1]) break;
        arr.push(item);
    }
    arr = [...new Set(arr)];
    return arr;
}



console.log(newString)
