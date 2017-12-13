import mongoose from 'mongoose'
import customer from '../models/customer'

const postCustomer = async(req, res, next) => {
  const newCustomer = await new customer(req.body)
    .save().then(custumer => res.json(custumer))
}

const getCustomers = async(req, res, next) => {
  await custumer.find().then(customers => res.json(customers)
  )
}

export { postCustomer, getCustomers }