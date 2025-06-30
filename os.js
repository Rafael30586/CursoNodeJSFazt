const os = require('os')

console.log(os.userInfo())
console.log(os.uptime()) // Devuelve el tiempo desde que se encendió la PC hasta el momento de ejecutar esta función
console.log(os.platform())
console.log(os.totalmem()) // Devuelven datos sobre la memoria ram
console.log(os.freemem())

console.table({
    totalMemory : os.totalmem(),
    freememory: os.freemem(),
    platform: os.platform()
})