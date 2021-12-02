import mongoose, { model } from 'mongoose'


const postSchema = new mongoose.Schema({
    title: String,
    video: {
        type: Array,
        required: true
    },
    isPrivate:{
        type: String,
        default: 'Все'
    },
    followers:[{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
    user: {type: mongoose.Types.ObjectId, ref: 'user'},
    isComment: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export default mongoose.model('post', postSchema)