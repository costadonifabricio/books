import mongoose from "mongoose";
import { AddBooktoAuthor } from "./author.js";

const booksSchema = new mongoose.Schema({
    title: String,
    gender: String,
    year_publication: String,
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'Author'
    },
    cover_page: String,
});

export const BooksModel = mongoose.model('Books', booksSchema)

// Servicios
export const getBooks = async () => {
    try {
        const books = await BooksModel.find().populate({
            path: 'author',
            select: 'name'
        });
        console.log(books);
        return books;
    } catch (error) {
        console.error(`error al obtener los libros: ${error.message}`)
    }
}

export const getBook = async (id) => {
    try {
        const book = await BooksModel.findById(id).populate({
            path: 'author',
            select: 'name'
        });
        console.log(books);
        return book
    } catch (error) {
        console.error(`error al obtener el libro: ${error.message}`)
    }
}

export const createBook = async (book) => {
    try {
        const { author } = book;
        const newBook = new BooksModel(book);
        AddBooktoAuthor(author, newBook);
        await newBook.save();
        return newBook
    } catch (error) {
        console.error(`error al crear el libro: ${error.message}`)
    }
}

export const updateBook = async (id, book) => {
    try {
        const updatedBook = await BooksModel.findByIdAndUpdate(id, book)
        return updatedBook
    } catch (error) {
        console.error(`error al actualizar el libro: ${error.message}`)
    }
}

export const deleteBook = async (id) => {
    try {
        const deletedBook = await BooksModel.findByIdAndDelete(id)
        return deletedBook
    } catch (error) {
        console.error(`error al eliminar el libro: ${error.message}`)
    }
}
