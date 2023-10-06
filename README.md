## Gestión de Libros

Este es un proyecto de gestión de libros desarrollado en Node.js, MongoDB, Mongoose y Express.js. La aplicación permite a los usuarios realizar diversas acciones relacionadas con libros y autores, incluyendo la capacidad de agregar libros, autores, ver listas de libros, subir imágenes de portada, agrupar libros por género y eliminar libros y autores de la base de datos.

Requisitos:

    Node.js
    MongoDB 
    Mongoose
    Express.js
    express-fileupload

### Instalación

    Clona el repositorio:

    bash

git clone https://github.com/costadonifabricio/books.git

### Instala las dependencias:

bash

cd gestion-de-libros
npm install

### Inicia la aplicación:

bash

    npm start

### Funcionalidades
1. Agregar un Libro

Los usuarios pueden agregar un nuevo libro proporcionando información como título, género, año de publicación y una imagen de portada del libro. Además, pueden seleccionar el autor del libro desde una lista desplegable de autores existentes.

Ruta: POST /books

Body:

json

{
    "title": "Nombre del Libro",
    "gender": "Género del Libro",
    "year_publication": 2023,
}

2. Agregar un Autor

Los usuarios pueden agregar un nuevo autor proporcionando información como nombre, apellido y una breve biografía.

Ruta: POST /authors

Body:

json

{
    "name": "Nombre del Autor",
    "surname": "Apellido del Autor",
    "biography": "Breve biografía del Autor"
}

3. Ver Lista de Libros

Los usuarios pueden ver una lista de todos los libros almacenados en la base de datos, incluyendo su título, género y el nombre del autor.

Ruta: GET /books

4. Eliminar Libros y Autores

Los usuarios pueden eliminar libros y autores de la base de datos.

Eliminar Libro:
Ruta: DELETE /books/:id

Eliminar Autor:
Ruta: DELETE /authors/:id