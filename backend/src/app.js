import express from 'express';
import path from 'path'
import {fileURLToPath} from 'url'

const app = express();

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const parentDir = path.resolve(__dirname, '..');

//vistas pug
app.set('view engine', 'pug');
app.set('views', path.join(parentDir, '../frontend/views'));

//archivos estaticos
app.use(express.static(path.join(parentDir, '../frontend/public')));
app.use('/assets', express.static(path.join(parentDir, '../frontend/public')));

const port = 3000;

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});