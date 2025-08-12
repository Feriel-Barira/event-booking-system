import express from 'express'
import auth from '../middlewares/auth.js'
import { bookTicket, cancelBooking } from '../controllers/bookingController.js'

const router = express.Router()

router.post('/:eventId', auth, bookTicket)
router.delete('/:id', auth, cancelBooking)

export default router
