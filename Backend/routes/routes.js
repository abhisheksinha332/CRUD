import express from 'express'


import {getModels, setModels, setNotes} from '../controllers/Controller.js'

const router = express.Router()

router.get('/', getModels)
router.post('/post', setModels)
router.post('/notes', setNotes)

export default router