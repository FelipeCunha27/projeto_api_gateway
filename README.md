# API de Peças com Kong Gateway

API para gerenciamento de peças e seus componentes com autenticação via Kong Gateway.

## Pré-requisitos:

- Docker e Docker Compose
- Node.js 18+
- Postman ou Insomnia

## Endpoints da API:

#### GET: http://localhost:8000/api/v1/peca?apikey=gJn8nV566gN95zDqE9rmVrKde4qVmP8K

Retorna lista de peças com componentes.

#### GET: http://localhost:8000/api/v1/peca/{codigo_peca}?apikey=gJn8nV566gN95zDqE9rmVrKde4qVmP8K

Retorna uma peça específica, passando o código da mesma.

#### GET: http://localhost:8000/api/v1/peca/{codigo_peca}/componentes?apikey=gJn8nV566gN95zDqE9rmVrKde4qVmP8K

Retorna o componente de uma peça específica, passando o código da peça.

#### POST http://localhost:8000/api/v1/peca?apikey=gJn8nV566gN95zDqE9rmVrKde4qVmP8K

Cria uma nova peça.

#### POST http://localhost:8000/api/v1/peca/{codigo_peca}/componentes?apikey=gJn8nV566gN95zDqE9rmVrKde4qVmP8K

Cria um novo componente para a peça criada, passando o código da mesma.

## Autenticação

A API usa autenticação do Kong Gateway, passando no final do endpoint a apikey: gJn8nV566gN95zDqE9rmVrKde4qVmP8K

## Executar o Kong:

```bash
docker-compose up -d kong kong-database

# API rodando localmente na porta 3000
npm run dev
```
