const express = require('express')

const server = express()
const aboutRouter = require('./routes/about')

server.set('view engine', 'ejs')
server.set('views', __dirname + '/views')

server.use(express.static(__dirname + '/public'))

server.listen(3000)
console.log('RUN')

server.use('/', aboutRouter)

