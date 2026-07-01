# Podcast Manager 🎙️
### Descrição

O Podcast Manager é uma aplicação desenvolvida em Node.js + TypeScript para gerenciamento de episódios de podcasts em vídeo.

A API permite:

Listar episódios organizados por categorias
Filtrar episódios pelo nome do podcast
Retornar dados estruturados em formato JSON
Domínio da Aplicação

### A aplicação trabalha com podcasts em vídeo, organizando episódios por temas como:

Saúde
Fitness
Mentalidade
Humor
Empreendedorismo
Esportes


📌 Listar episódios

Retorna todos os episódios cadastrados organizados por categorias.

🔍 Filtrar episódios por podcast

Permite buscar episódios específicos pelo nome do podcast.

### Exemplos:

Flow
PodPah
Inteligência Artificial


### Exemplo de resposta
[
{
   "podcastName": "flow",
    "episode": "TALLIS_ALFREDO_NARDON_Flow_605",
    "videoId": "caCON_uLJjQ",
    "categories": ["Mentalidade", "Empreendorismo"]
  },
  {
    "podcastName": "flow",
    "episode": "RENATO_MOICANO_Flow_604",
    "videoId": "o1rR7qXxJBA",
    "categories": ["Mentalidade", "Esporte"]
  }
]

Endpoint: Filtrar episódios
GET /episodes?p=Flow

### Parâmetros
Parâmetro	Tipo	Descrição
p	string	Nome do podcast para filtro
Estrutura do Projeto
src/
│
├── controllers/
├── routes/
├── utils/
├── services/
├── models/
└── app.ts
Trecho Principal da Aplicação
import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Route } from './routes/routes';
import { httpMethod } from './utils/http-methods';

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {

  const baseUrl = request.url?.split("?")[0];

  if (request.method === httpMethod.GET && baseUrl === Route.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === httpMethod.GET && baseUrl === Route.EPISODES) {
    await getFilterEpisodes(request, response);
  }
};

### Como Executar o Projeto
1. Clonar o repositório
git clone <URL_DO_REPOSITORIO>
2. Instalar dependências
npm install
3. Executar o projeto
npm run start:dev
Melhorias Futuras 🚀
Integração com banco de dados
Paginação de episódios
Busca por categorias
Upload automático de episódios
Autenticação de usuários
Documentação com Swagger
Autor

### Desenvolvido por Gabriel Scarpin 👨‍💻
