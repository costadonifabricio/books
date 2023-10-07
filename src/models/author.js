import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    biography: String,
    books: [{
        type: mongoose.Types.ObjectId,
        ref: 'Books'
    }]
})

export const AuthorModel = mongoose.model('Author', userSchema)

// Servicios

export const getAuthors = async () => {
    try {
        const authors = await AuthorModel.find().populate({
            path: 'books',
            select: 'title'
        });
        console.log(authors);
        return authors
    } catch (error) {
        console.error(`error al obtener los autores: ${error.message}`)
    }
}

export const getAuthor = async (id) => {
    try {
        const author = await AuthorModel.findById(id).populate({
            path: 'books',
            select: 'title'
        });
        console.log(authors);
        return author
    } catch (error) {
        console.error(`error al obtener el autor: ${error.message}`)
    }
}

export const createAuthor = async (author) => {
    try {
        const newAuthor = new AuthorModel(author)
        await newAuthor.save()
        return newAuthor
    } catch (error) {
        console.error(`error al crear el autor: ${error.message}`)
    }
}

export const updateAuthor = async (id, author) => {
    try {
        const updatedAuthor = await AuthorModel.findByIdAndUpdate(id, author)
        return updatedAuthor
    } catch (error) {
        console.error(`error al actualizar el autor: ${error.message}`)
    }
}

export const deleteAuthor = async (id) => {
    try {
        const deletedAuthor = await AuthorModel.findByIdAndDelete(id)
        return deletedAuthor
    } catch (error) {
        console.error(`error al eliminar el autor: ${error.message}`)
    }
}

export const AddBooktoAuthor = async (id, book) => {
    try {
        const author = await AuthorModel.findById(id)
        author.books.push(book)
        const updatedAuthor = await author.save()
        return updatedAuthor;
    } catch (error) {
        console.error(`error al agregar el libro al autor: ${error.message}`)
    }
}
