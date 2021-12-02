import express from 'express'
import postCtrl from '../controllers/postCtrl'

const router = express.Router()

router.post('/create_post', postCtrl.createPost)

export default router