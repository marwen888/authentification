const express = require('express')
const connectDB = require('./config/connectDB')
const app = express()
app.use(express.json())

const authRouter = require('./route/auth')

const port = process.env.PORT || 5001 

 connectDB()


 app.use('/api/auth' , authRouter)
app.listen(port , (err)=>{
    err ? console.log(err) : console.log(`the server is runing on port ${port}`)
}) 