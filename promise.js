const {readFile} = require("fs")
const {promisify} = require('util')

const readFilePromise = promisify(readFile) // Hace lo mismo que todo el código de const getText

/*
const getText = (pathfile) => {
    return new Promise(function (resolve, reject) {
        readFile(pathfile,"utf-8",(err,data) => {
            if(err){
                reject(err)
            }

            resolve(data)
        })
    })
}

getText('./data/first.txt').then(text=>console.log(text))
*/

async function read(){
    try{
        const result = await readFilePromise('./data/first.txt','utf-8')
        const result2 = await readFilePromise('./data/second.txt','utf-8')
        const result3 = await readFilePromise('./data/third.txt','utf-8')
        console.log(result)
        console.log(result2)
        console.log(result3)

    }catch(error){
        console.log(error)
    }
}

read()