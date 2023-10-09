import { BooksModel } from '../models/books.js';

export const getBooksCtrl = async (req, res) => {
    try {
        const books = await BooksModel.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBookCtrl = async (req, res) => {
    try {
        const book = await BooksModel.findById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createBookCtrl = async (req, res) => {
    try {
        const book = new BooksModel(req.body);
        await book.save();
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBookCtrl = async (req, res) => {
    try {
        const book = await BooksModel.findById(req.params.id);
        await book.updateOne(req.body);
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteBookCtrl = async (req, res) => {
    try {
        const book = await BooksModel.findById(req.params.id);
        await book.deleteOne();
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

