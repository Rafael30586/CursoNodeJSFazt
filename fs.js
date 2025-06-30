const fs = require('fs')

const first = fs.readFileSync('./data/first.txt','utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString())

fs.writeFileSync('./data/third.txt','Este es un tercer archivo')