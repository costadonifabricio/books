import { getBook, getBooks, createBook, updateBook, deleteBook } from "../models/books.js";

export const getBooksCtrl = async (req, res) => {
    try {
        const books = await getBooks();
        res.status(200).json(books);
    } catch (error) {
        console.error(`error al obtener los libros: ${error.message}`);
        res.status(500).json(error.message);
    }
}

export const getBookCtrl = async (req, res) => {
    try {
        const book = await getBook(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        console.error(`error al obtener el libro: ${error.message}`);
        res.status(500).json(error.message);
    }
}

export const createBookCtrl = async (req, res) => {
    try {
        const book = await createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        console.error(`error al crear el libro: ${error.message}`);
        res.status(500).json(error.message);
    }
}

export const updateBookCtrl = async (req, res) => {
    try {
        const book = await updateBook(req.params.id, req.body);
        res.status(200).json(book);
    } catch (error) {
        console.error(`error al actualizar el libro: ${error.message}`);
        res.status(500).json(error.message);
    }
}

export const deleteBookCtrl = async (req, res) => {
    try {
        const book = await deleteBook(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        console.error(`error al eliminar el libro: ${error.message}`);
        res.status(500).json(error.message);
    }
}
