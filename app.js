//Globals

// console.log(__dirname)

// setInterval(() => {
//     console.log('Hello world')
// }, 1000)

//Modules - commonjs - every file in node is a module

// const john='john'
// const peter='peter'
// const secret='super secret'

// const sayHi=(name)=>{
//     console.log(`Hello ${name}`)
// }


//{ john: 'john', peter: 'peter' } is the output
const names = require('./name');
// console.log(names); 

const sayHi = require('./utils');

const data =require('./alternativeflavor');

require('./mindgrenade')

// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)