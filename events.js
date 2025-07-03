const EventEmitter = require('events')

const customEmitter = new EventEmitter()
const customEmitter2 = new EventEmitter()

customEmitter.on('response',(data) => {
    console.log(data)
})

customEmitter2.on('response',(data,secondData)=>{
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('response', 'Hello world')
customEmitter2.emit('response',[4,10,41],true)