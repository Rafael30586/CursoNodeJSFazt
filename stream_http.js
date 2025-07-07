const http = require('http')    // Este archivo no funciona, se ejecuta péro no hace lo que debería (tendría que imprimir el contenido del archivo bigfile.txt en el navegador en el puerto 3000)
const {createReadStream} = require('fs')

const server = http.createServer((req,res)=>{
    const fileStream = createReadStream('./data/bigfile.txt',{
        encoding: 'utf-8'
    })

    fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
    })

    fileStream.on('error', error => {
        console.log(error)
    })

    
})

server.listen(3000)
console.log(`server on port 3000`)