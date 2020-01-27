import cors from 'cors'
import express from 'express'
import path from 'path'
import { json, urlencoded } from 'body-parser'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res) => res.json({ hello: 'world 🌐' }))

export { app }
