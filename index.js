import express from 'express';
import pecaRouter from './routes/peca.js';

const app = express();

app.use(express.json());
app.use('/api/v1/peca', pecaRouter);

const port = 3001;

app.listen(port, () => console.log('Servidor funcionando com sucesso'));
