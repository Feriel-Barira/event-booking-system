import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  name: String,
  location: String,
  date: Date,
  price: Number,
  availableSeats: Number,
})

export default mongoose.model('Event', eventSchema)
