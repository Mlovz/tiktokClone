import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
   
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    storis:{
        type: Object,
        default: 'https://res.cloudinary.com/daggokgzh/video/upload/v1638539749/CloseUp_q9kszy.mp4'
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/daggokgzh/image/upload/v1636607285/artist_hxqtia.png'
    },
    role: {
        type: String,
        default: 'user'
    },
    gender: {
        type: String,
        default: 'male'
    },
    mobile: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    story: {
        type: String,
        default: '',
        maxlength: 200
    },
    website: {
        type: String,
        default: ''
    },
    followers: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    following: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    saved: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }]
}, {
    timestamps: true
})


export default mongoose.model('user', userSchema)