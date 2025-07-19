import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String ,
            required: true,
            unique: 'true',
            lowercase: true,
            trim: true,
        },
        password: {
            type: String ,
            required: true,
            unique: 'true',
        },
        profilePic: {
            type: String,
            required: true,
        },
        saveBlogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Blog'
            }
        ],
        followers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        following: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    }, { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;