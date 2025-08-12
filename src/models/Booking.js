import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  qrCode: String,
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.model('Booking', bookingSchema)
