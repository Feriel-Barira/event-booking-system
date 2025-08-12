import Booking from '../models/Booking.js'
import Event from '../models/Event.js'
import generateQRCode from '../utils/generateQRCode.js'
import sendEmail from '../utils/sendEmail.js'

export const bookTicket = async (req, res) => {
  const event = await Event.findById(req.params.eventId)
  if (!event) return res.status(404).json({ message: 'Event not found' })

  if (event.availableSeats <= 0) {
    return res.status(400).json({ message: 'No seats available' })
  }

  const qr = await generateQRCode(`Event: ${event.name}, User: ${req.user.email}`)

  const booking = await Booking.create({
    user: req.user._id,
    event: event._id,
    qrCode: qr,
  })

  event.availableSeats -= 1
  await event.save()

  await sendEmail(req.user.email, 'Booking Confirmation', `Your ticket for ${event.name}`, qr)

  res.status(201).json({ booking })
}

export const cancelBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id)
  if (!booking) return res.status(404).json({ message: 'Booking not found' })

  const event = await Event.findById(booking.event)
  event.availableSeats += 1
  await event.save()

  await booking.remove()
  res.json({ message: 'Booking canceled' })
}
