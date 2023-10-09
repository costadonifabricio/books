import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    title: String,
    gender: String,
    year_publication: String,
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'Author'
    }
})

export const BooksModel = mongoose.model('Books', booksSchema)

