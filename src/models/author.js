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

export const UserModel = mongoose.model('Author', userSchema)

// Servicios

export const getAuthors = async () => {
    try {
        const authors = await UserModel.find()
        return authors
    } catch (error) {
        console.error(`error al obtener los autores: ${error.message}`)
    }
}

export const getAuthor = async (id) => {
    try {
        const author = await UserModel.findById(id)
        return author
    } catch (error) {
        console.error(`error al obtener el autor: ${error.message}`)
    }
}

export const createAuthor = async (author) => {
    try {
        const newAuthor = new UserModel(author)
        await newAuthor.save()
        return newAuthor
    } catch (error) {
        console.error(`error al crear el autor: ${error.message}`)
    }
}

export const updateAuthor = async (id, author) => {
    try {
        const updatedAuthor = await UserModel.findByIdAndUpdate(id, author)
        return updatedAuthor
    } catch (error) {
        console.error(`error al actualizar el autor: ${error.message}`)
    }
}

export const deleteAuthor = async (id) => {
    try {
        const deletedAuthor = await UserModel.findByIdAndDelete(id)
        return deletedAuthor
    } catch (error) {
        console.error(`error al eliminar el autor: ${error.message}`)
    }
}
