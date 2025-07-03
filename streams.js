
// const {writeFile} = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('./data/bigfile.txt','hello world'.repeat(100)) //El método reapeat permite que el texto se copie en el archivo tantas veces como uno quiera dependiendo del argumento que uno le haya pasado
// }


// createBigFile()

const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigfile.txt','utf-8')

stream.on('data',(chunk)=>{ //El primer argumento que se le pasa es el evento, en este caso es data pero hay otros también. Aparentemente data hace referencia a cada caracter prsente en el archivo
    console.log(chunk)
})

stream.on('end',()=>{ // El argumento end hace referencia a que el evento es terminar de leer el archivo. 
    console.log('Ya terminé de leer el archivo')
})

stream.on('error',(error)=>{ // En este caso el evento es la ocurrencia de un error
    console.log(error)
})