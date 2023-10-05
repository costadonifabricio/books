import express from 'express';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import { connectMongoDb } from './config/database.js';

const app = express();
const port = 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({
    createParentPath: true,
    limits: { fileSize: 20 * 1024 * 1024},
    abortOnLimit: true,
    responseOnLimit: "Archivo muy grande",
})
);
app.use(morgan('dev'));

app.listen(port, () => { 
    console.log(`Starting server on port localhost:${port}`); 
    connectMongoDb();
 })

