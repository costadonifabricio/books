import express from 'express';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import { connectMongoDb } from './config/database.js';
import { bookrouter } from './routes/books.routes.js';
import { authorouter } from './routes/author.routes.js';


const app = express();
const port = 5000;

app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/books', bookrouter);
app.use('/authors', authorouter);

app.listen(port, () => { 
    console.log(`Starting server on port localhost:${port}`); 
    connectMongoDb();
 })

