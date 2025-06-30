const fs = require('fs')

fs.readFile('./data/first.txt',(error, data)=>{ // Esta función es asíncrona a diferencia de readFileSync
    console.log(error)
    console.log(data.toString())
}) 
