'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the equalizeArray function below.
function equalizeArray(s1) {

    var obj = {};
    for (var i = 0; i < s1.length; i++) {
        if (typeof obj[s1[i]] === 'undefined') {
            obj[s1[i]] = 1;
        } else {
            obj[s1[i]] = obj[s1[i]] + 1;
        }
    }
    let c = 0;
    for(var i in obj) {
        if(obj[i] > c ){
            c = obj[i];
        }
    }
    return s1.length -c;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}
