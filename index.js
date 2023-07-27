const express = require('express')
const cors = require('cors')
const { connectAndListen } = require('./server')
const productsRouter = require('./routes/productRoute')
const userRouter = require('./routes/userRoute')
const cookieParser = require('cookie-parser');

const app = express()
app.use(cookieParser());

const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products', productsRouter)
app.use('/users', userRouter)

connectAndListen(app)