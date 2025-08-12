import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

export const register = async (req, res) => {
  const { username, email, password } = req.body
  const user = await User.create({ username, email, password })
  const token = generateToken(user)
  res.status(201).json({ token })
}

export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).json({ message: 'Invalid credentials' })
  }
  const token = generateToken(user)
  res.json({ token })
}
