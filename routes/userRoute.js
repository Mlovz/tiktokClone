import express from 'express'
import userCtrl from '../controllers/userCtrl'

const router = express.Router()

router.get('/user_search', userCtrl.searchUser)


export default router