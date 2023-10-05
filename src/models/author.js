import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    biography: String,
    books: [{
        type: mongoose.Types.ObjectId,
        ref: 'Books'
    }]
})

export const UserModel = mongoose.model('Author', userSchema)

