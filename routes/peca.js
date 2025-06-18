import express from 'express';
import { peca } from '../data.js';
import { randomUUID } from 'node:crypto';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send(peca);
});

router.get('/:codigo', (req, res) => {
  const { codigo } = req.params;
  const selectedPeca = peca.find((peca) => peca.codigo === codigo);
  res.status(200).send(selectedPeca);
});

router.get('/:codigo/componentes', (req, res) => {
  const { codigo } = req.params;
  const selectedPeca = peca.find((peca) => peca.codigo === codigo);
  const selectedComponent = selectedPeca.componentes;
  res.status(200).send(selectedComponent);
});

router.post('/', (req, res) => {
  const newPeca = { ...req.body };
  peca.push(newPeca);
  res.status(200).send(newPeca);
});

router.post('/:codigo/componentes', (req, res) => {
  const { codigo } = req.params;
  const selectedPeca = peca.find((peca) => peca.codigo === codigo);

  if (!selectedPeca) {
    return res.status(404).send({ error: 'Peça não encontrada' });
  }

  if (!selectedPeca.componentes) {
    selectedPeca.componentes = [];
  }

  const newComponent = { ...req.body, id: randomUUID() };
  selectedPeca.componentes.push(newComponent);
  res.status(200).send(newComponent);
});

export default router;
