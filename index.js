const express = require('express')
const cors = require('cors')
const rangeLimite = require('express-rate-limit') 
require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = express()

const limite = rangeLimite({
    windowMs: 10 * 60 * 1000, // 10 minutos
    max: 5
})
app.use(limite)
app.set('proxy confiável',1)
//routes
app.use('/api',require('./routes'))

app.use(cors())
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))