const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})

app.listen(3000)
console.log('server on port 3000')