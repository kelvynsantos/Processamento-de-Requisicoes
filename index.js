const express = require('express')
const cors = require('cors')
const rangeLimite = require('express-rate-limit') 
require('dotenv').config()
const errorHandler = require('./middleware/error')
const PORT = process.env.PORT || 5000
const app = express()

const limite = rangeLimite({
    windowMs: 10 * 60 * 1000, // 10 minutos
    max: 5
})
app.use(limite)
app.set('proxy confiável',1)

app.use(cors())

app.use(express.static('public'))
//routes
app.use('/api',require('./routes'))

app.use(errorHandler)
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))