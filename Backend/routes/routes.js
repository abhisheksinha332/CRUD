import express from 'express'


import {getModels, setModels} from '../controllers/Controller.js'

const router = express.Router()

router.get('/', getModels)
router.post('/post', setModels)

export default router