import { Router } from "express";
import { getAuthorCtrl, getAuthorsCtrl, createAuthorCtrl, updateAuthorCtrl, deleteAuthorCtrl } from "../controllers/author.controller.js";

const authorouter = Router();

authorouter.get('/', getAuthorsCtrl);

authorouter.get('/:id', getAuthorCtrl);

authorouter.post('/', createAuthorCtrl);

authorouter.put('/:id', updateAuthorCtrl);

authorouter.delete('/:id', deleteAuthorCtrl);

export { authorouter }

