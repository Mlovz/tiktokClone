import express from 'express'
import userCtrl from '../controllers/userCtrl'
import auth from '../middleware/auth'

const router = express.Router()

router.get('/user_search', userCtrl.searchUser)
router.get('/user/:id', userCtrl.getUser)
router.get('/users', userCtrl.getUsers)

router.patch('/user/:id/follow', auth, userCtrl.follow)
// router.patch('/user/:id/unfollow', auth, userCtrl.unfollow)


export default router