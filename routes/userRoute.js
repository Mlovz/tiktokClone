import express from 'express'
import userCtrl from '../controllers/userCtrl'

const router = express.Router()

router.get('/user_search', userCtrl.searchUser)
router.get('/user/:id', userCtrl.getUser)
router.get('/users', userCtrl.getUsers)


export default router