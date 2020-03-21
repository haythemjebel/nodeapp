const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparse = require('body-parser')
const employeeroute = require('./routes/employee')

mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log('Database connection established !')
})
const app = express()
app.use(morgan('dev'))
app.use(bodyparse.urlencoded({ extended: true }))
app.use(bodyparse.json())
app.use('/uploads', express.static('uploads'))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
app.use('/api/employee', employeeroute)