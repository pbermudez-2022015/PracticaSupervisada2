import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        minLength: [8, 'Password must be 8 characters'],
        required: true
    },
    role: {
        type: String,
        uppercase: true,
        enum: ['ESTUDENT', 'TEACHER'],
        required: true
    }
})

export default mongoose.model('user', userSchema)