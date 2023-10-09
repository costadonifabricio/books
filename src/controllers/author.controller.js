import { AuthorModel } from '../models/author.js';

export const getAuthorsCtrl = async (_req, res) => {
    try {
        const authors = await AuthorModel.find().populate({
            path: 'books',
            select: 'title gender'
        });
        res.json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAuthorCtrl = async (req, res) => {
    try {
        const author = await AuthorModel.findById(req.params.id).populate({
            path: 'books',
            select: 'title gender'
        });
        res.json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createAuthorCtrl = async (req, res) => {
    try {
        const author = new AuthorModel(req.body);
        await author.save();
        res.json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateAuthorCtrl = async (req, res) => {
    try {
        const author = await AuthorModel.findById(req.params.id);
        await author.updateOne(req.body);
        res.json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAuthorCtrl = async (req, res) => {
    try {
        const author = await AuthorModel.findById(req.params.id);
        await author.deleteOne();
        res.json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
