import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import routes from './routes/index'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.use('/api', routes.authRoute)

const uri = process.env.MONGODB_URL

mongoose.connect(uri, {

}, err => {
    if(err) throw err
    console.log('Подключены к БД...');
})

const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
})