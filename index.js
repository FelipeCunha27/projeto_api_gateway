import express from 'express';
import { peca } from './data.js';

const baseAPIRoute = '/api/v1';

const app = express();

app.get(baseAPIRoute + '/peca', (req, res) => {
  res.status(200).send(peca);
});

const port = 3001;

app.listen(port, () => console.log('Servidor funcionando com sucesso'));
