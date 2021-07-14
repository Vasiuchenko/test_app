const fs = require('fs');

// Read file and form an array

let strings = fs.readFileSync('./sourse.txt'),
    fibonacci = [],
    filteredStrings = [],
    reverseStrings = [];

strings = strings.toString();
strings = strings.split("\r\n");

if (strings.length > 0) fibonacci = createFibonacci(strings.length);

// Create an array with filtered strings
for (let i = 0; i < fibonacci.length; i++) {
    let string = strings.filter((item, index) => index === fibonacci[i]);
    
    if(typeof string[0] === 'string') filteredStrings[i] = string[0];
}

filteredStrings.forEach(item => makeReverse(item));

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

// New method reverse
function makeReverse(item) {
    let string = '';

    for (let i = item.length - 1; i >= 0; i--) string += item[i];

    reverseStrings.push(string);
}

console.log(reverseStrings)
