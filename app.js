import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import connectDatabase from './config/db'
import customerRouter from './api/routes/customer'

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', customerRouter)

export { app, port }
