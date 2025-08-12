import express from 'express'
import auth from '../middlewares/auth.js'
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js'

const router = express.Router()

router.get('/', getEvents)
router.get('/:id', getEventById)
router.post('/', auth, createEvent)
router.put('/:id', auth, updateEvent)
router.delete('/:id', auth, deleteEvent)

export default router
