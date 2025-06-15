import express from 'express';
import { peca } from './data.js';
import { randomUUID } from 'node:crypto';
import { console } from 'node:inspector';

const baseAPIRoute = '/api/v1';

const app = express();

app.use(express.json());

app.get(baseAPIRoute + '/peca', (req, res) => {
  res.status(200).send(peca);
});

app.get(baseAPIRoute + '/peca/:codigo', (req, res) => {
  const { codigo } = req.params;
  const selectedPeca = peca.find((peca) => peca.codigo === codigo);
  res.status(200).send(selectedPeca);
});

app.post(baseAPIRoute + '/peca', (req, res) => {
  const newPeca = { ...req.body, id: randomUUID() };
  peca.push(newPeca);
  res.status(200).send(newPeca);
});

const port = 3001;

app.listen(port, () => console.log('Servidor funcionando com sucesso'));
