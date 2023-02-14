const os = require('os')

const user = os.userInfo()
console.log(user)

// checking the system up(how long the system has been running in secconds)
console.log(`this is the system uptime ${os.uptime()} in seconds`)

const systemDetais ={
    osName: os.type(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    release: os.release(),
    version: os.version()
}
console.log(systemDetais)