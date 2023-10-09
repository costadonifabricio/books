import { BooksModel } from '../models/books.js';
import { AuthorModel } from '../models/author.js';

export const getBooksCtrl = async (_req, res) => {
    try {
        const books = await BooksModel.find().populate({
            path: 'author',
            select: 'name surname'
        });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBookCtrl = async (req, res) => {
    try {
        const book = await BooksModel.findById(req.params.id).populate({
            path: 'author',
            select: 'name surname'
        });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createBookCtrl = async (req, res) => {
    try {
        const { title, gender, authorId } = req.body; // Suponiendo que el cuerpo de la solicitud contiene el título y el ID del autor

        const author = await AuthorModel.findById(authorId);

        if (!author) {
            return res.status(404).json({ message: 'Autor no encontrado' });
        }

        const newBook = new BooksModel({
            title,
            gender,
            author: author._id, // Establecer la referencia al autor
        });

        await newBook.save();

        // Agregar el libro al autor
        author.books.push(newBook);
        await author.save();

        res.json(newBook);
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

