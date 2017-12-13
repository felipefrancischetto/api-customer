import mongoose from 'mongoose'
import db from '../../config/db'

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'This field is required']
  },
  age: {
    type: String,
    required: [true, 'This field is required']
  }
}, {
  versionKey: false
})

export const customerModel = db.model('custumers', customerSchema)