const {readFileSync, writeFileSync} = require('fs');  //2 parameters 

// const fs = require('fs');
// fs.read

const first = readFileSync('./content/first.txt', 'utf8');   //here we execute the code line by line
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first,second);

writeFileSync('./content/result-sync.txt', `result of the two files: ${first} , ${second}`, {flag:'a'});  //file will be created and if it already exists , it will be overwritten

//flag will combine both instead of overwriting

console.log('done with this task')
console.log('starting the next one')
