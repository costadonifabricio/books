import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    title: String,
    gender: String,
    year_publication: String,
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'Author'
    },
    cover_page: String
})

export const BooksModel = mongoose.model('Books', booksSchema)

