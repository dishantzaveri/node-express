const os = require('os');

os.cpuz

//info about current user


const user = os.userInfo();
console.log(user);

//method returns system uptime in seconds

console.log(`system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}