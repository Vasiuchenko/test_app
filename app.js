const fs = require('fs');

// Read file and form an array, creating new variables

let strings = fs.readFileSync('./sourse.txt'),
    fibonacci = [],
    filteredStrings = [],
    reverseStrings = [],
    data = '';

strings = strings.toString();
strings = strings.split("\r\n");

// Create an array with Fibonacci sequence
if (strings.length > 0) fibonacci = createFibonacci(strings.length);

// Create an array with filtered strings
for (let i = 0; i < fibonacci.length; i++) {
    let string = strings.filter((item, index) => index === fibonacci[i]);
    
    if(typeof string[0] === 'string') filteredStrings[i] = string[0];
}

// Reverse array
filteredStrings.forEach(item => makeReverse(item));

// Create new data for file
console.log(reverseStrings);
data = reverseStrings.join('\r\n');
console.log(data);

// Write a new file
fs.writeFile('output.txt', data, function (err) {
    if (err) return console.log(err);
    console.log('create new file');
  });

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
