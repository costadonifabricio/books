import { getAuthor, getAuthors, createAuthor, updateAuthor, deleteAuthor } from "../models/author.js";

export const getAuthorsCtrl = async (req, res) => {
    try {
        const authors = await getAuthors();
        res.status(200).json(authors);
    } catch (error) {
        console.error(`error al obtener los autores: ${error.message}`);
        res.status(500).json(error.message);
    }
}    

export const getAuthorCtrl = async (req, res) => {
    try {
        const author = await getAuthor(req.params.id);
        res.status(200).json(author);
    } catch (error) {
        console.error(`error al obtener el autor: ${error.message}`);
        res.status(500).json(error.message);
    }
}

export const createAuthorCtrl = async (req, res) => {
    try {
        const author = await createAuthor(req.body);
        res.status(201).json(author);
    } catch (error) {
        console.error(`error al crear el autor: ${error.message}`);
        res.status(500).json(error.message);
    }
}

export const updateAuthorCtrl = async (req, res) => {
    try {
        const author = await updateAuthor(req.params.id, req.body);
        res.status(200).json(author);
    } catch (error) {
        console.error(`error al actualizar el autor: ${error.message}`);
        res.status(500).json(error.message);
    }
}

export const deleteAuthorCtrl = async (req, res) => {
    try {
        const author = await deleteAuthor(req.params.id);
        res.status(200).json(author);
    } catch (error) {
        console.error(`error al eliminar el autor: ${error.message}`);
        res.status(500).json(error.message);
    }
}
