import { BooksModel } from '../models/books.js';
import { AuthorModel } from '../models/author.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

import path from 'path';

export const createBookCtrl = async (req, res) => {
    try {
        const { title, gender, authorId } = req.body;

        // Obtén el archivo de la solicitud
        const coverPage = req.files && req.files.cover_page;

        // Verifica si se envió una imagen de portada
        if (coverPage) {
            // Mueve la imagen a la carpeta de imágenes (puedes cambiar la ruta según tu estructura)
            const uploadPath = path.join(__dirname, '../files', coverPage.name);
            await coverPage.mv(uploadPath);

            // Asigna el nombre del archivo a la propiedad cover_page de tu nuevo libro
            const newBook = new BooksModel({
                title,
                gender,
                author: authorId,
                cover_page: coverPage.name, // Asigna el nombre del archivo
            });

            await newBook.save();

            // Agregar el libro al autor
            const author = await AuthorModel.findById(authorId);
            author.books.push(newBook);
            await author.save();

            res.json(newBook);
        } else {
            // Si no se envió una imagen de portada, crea el libro sin el atributo cover_page
            const newBook = new BooksModel({
                title,
                gender,
                author: authorId,
            });

            await newBook.save();

            // Agregar el libro al autor
            const author = await AuthorModel.findById(authorId);
            author.books.push(newBook);
            await author.save();

            res.json(newBook);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


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

