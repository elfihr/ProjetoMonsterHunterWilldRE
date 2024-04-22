const express = require('express')

const app = express()
const port = 5000

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))//root direction
app.use('/img',express.static(__dirname + 'public/img'))//root direction

//template Engine
app.set('views', './src/views')
app.set('views engine', 'ejs')

//Rotas
const Router = require('./src/routes/main')
app.use('/', Router)

//Listen
app.listen(port,() => {
    console.log(`Server iniciado`)
    console.log(`http://localhost:5000/`)
    }
)