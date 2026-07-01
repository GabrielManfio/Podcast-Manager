# Podcast Manager

### Descrição
Gerenciador de podcast por categorias

### Detalhes do dominio
Podcast feitos em video

### Features 
- Listar os episódios  em sessões de categorias (saude, fitness, mentalidade, humor)
- Filtar por podcasts (Flow, PodPah, Inteligencia Artificial)

## Como

### Features 
Listar os episódios  em sessões de categorias (saude, fitness, mentalidade, humor)

### Implementação
GET: retorna lista de episódios baseado em um paramentro enviado pelo cliente do nome do podcast

(Exeplos)
RESPONSE:
```js
[
    {
    podcastName: "Flow",
    episode: "TALLIS + ALFREDO + NARDON - Flow 605",
    videoId: "caCON_uLJjQ",
    cover: "caCON_uLJjQ/maxresdefault.jpg",
    link: "caCON_uLJjQ&t=9701s",
    categories: ["Mentalidade" , "Empreendorismo"]
    },
{
     podcastName: "Flow",
    episode: "RENATO MOICANO - Flow 604",
    videoId: "o1rR7qXxJBA",
    cover: "o1rR7qXxJBA",
    link: "o1rR7qXxJBA",
    categories: ["Mentalidade" , "Esporte"]
    },  
]
``` 


