import { Router } from "express";
import { getBookCtrl, getBooksCtrl, createBookCtrl, updateBookCtrl, deleteBookCtrl } from "../controllers/book.controller.js";

const bookrouter = Router();

bookrouter.get('/', getBooksCtrl);

bookrouter.get('/:id', getBookCtrl);

bookrouter.post('/', createBookCtrl);

bookrouter.put('/:id', updateBookCtrl);

bookrouter.delete('/:id', deleteBookCtrl);

export { bookrouter }
