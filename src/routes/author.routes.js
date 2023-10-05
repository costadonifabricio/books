import { Router } from "express";
import { getAuthorCtrl, getAuthorsCtrl, createAuthorCtrl, updateAuthorCtrl, deleteAuthorCtrl } from "../controllers/author.controller.js";

const authorouter = Router();

authorouter.get('/authors', getAuthorsCtrl);

authorouter.get('/authors/:id', getAuthorCtrl);

authorouter.post('/authors', createAuthorCtrl);

authorouter.put('/authors/:id', updateAuthorCtrl);

authorouter.delete('/authors/:id', deleteAuthorCtrl);

export { authorouter }

