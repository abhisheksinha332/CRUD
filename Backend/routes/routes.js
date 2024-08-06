import express from 'express'


import {deleteNote, getModels, getNote, setModels, setNotes, UpdateNote} from '../controllers/Controller.js'
import { signup, login, logout, checkAuth} from '../controllers/UserController.js'
import { requireAuth } from '../Middleware/middleware.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/logout',logout)
router.get('/check-auth', requireAuth ,checkAuth)

router.get('/', getModels)
router.post('/post', setModels)
router.post('/notes', setNotes)
router.get('/notes/:id',getNote )
router.put('/notes/update/:id', UpdateNote)
router.delete('/notes/delete/:id', deleteNote)

export default router