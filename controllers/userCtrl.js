import Users from '../models/userModel'


const userCtrl = {
    searchUser: async(req, res) => {
        try {
            const users = await Users.find({username: {$regex: req.query.username}}).limit(10).select("fullname username avatar")
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getUser: async(req, res) => {
        try {
            const user = await Users.findById(req.params.id).select('-password')
            .populate("followers following", "-password")
            res.json({user})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getUsers: async(req, res) => {
        try {
            const users = await Users.find().select('-password').limit(20)
            .populate("followers following", "-password")
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    follow: async (req, res) => {
        try {
            const newUser = await Users.findOneAndUpdate({_id: req.params.id}, { 
                $push: {followers: req.user._id}
            }, {new: true}).populate("followers following", "-password")

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $push: {following: req.params.id}
            }, {new: true})

            res.json({newUser})
        } catch (error) {
            
        }
    }

}

export default userCtrl