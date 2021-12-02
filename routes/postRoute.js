import express from 'express'
import postCtrl from '../controllers/postCtrl'
import auth from '../middleware/auth'

const router = express.Router()

router.post('/create_post', auth, postCtrl.createPost)

export default router