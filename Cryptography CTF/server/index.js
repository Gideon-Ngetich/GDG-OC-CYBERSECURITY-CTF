const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const app = express()
const PostFlag = require('./Routes/POSTFlag.Route')
const GetFlag = require('./Routes/SubmitFlag.Route')
app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Connected to DB')
    })
    .catch ((err) => {
        console.log(err)
    })

app.use('/api/postflags', PostFlag)
app.use('/api/submitflag', GetFlag)