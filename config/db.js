import mongodb from 'mongodb'
import mongoose from 'mongoose'
import { app, port } from '../app'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/api', { useMongoClient : true }) 

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Running database'))

export { db }