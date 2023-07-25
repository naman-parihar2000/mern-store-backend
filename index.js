const express = require('express')
const cors = require('cors')
const { connectAndListen } = require('./server')
const productsRouter = require('./routes/productRoute')
const userRouter = require('./routes/userRoute')

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products', productsRouter)
app.use('/users', userRouter)

connectAndListen(app)