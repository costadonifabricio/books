import { Router } from "express";
import { getBookCtrl, getBooksCtrl, createBookCtrl, updateBookCtrl, deleteBookCtrl } from "../controllers/books.controller.js";

const bookrouter = Router();

bookrouter.get('/books', getBooksCtrl);

bookrouter.get('/books/:id', getBookCtrl);

bookrouter.post('/books', createBookCtrl);

bookrouter.put('/books/:id', updateBookCtrl);

bookrouter.delete('/books/:id', deleteBookCtrl);

export { bookrouter }
