# Consulta Fipe

Projeto desenvolvido para candidatura em vaga para desenvolvedor front-end,
o projeto consite em consumir uma api para consultar a tabela fipe de carros.

## Instalação

Primeiro, execute o servidor de desenvolvimento:

```bash
    npm run dev
ou
    yarn dev
```

## Tech Stack

**Client:** NextJS, ContextAPI, Material UI, react-query, nookies

**Server:** Axios

## Demo

https://consultafipe.vercel.app/

## Authors

- [@thiagofragata](https://www.github.com/thiagofragata)

## Exercícios

Exercício 1

```javascript
export function Maskify(str: string, mask = '#', n = 4) {
  return ('' + str).slice(0, -n).replace(/./g, mask) + ('' + str).slice(-n);
}
turn <Component />
}
```

Exercício 2

```javascript
export function updateData(currentObject: any, newDataObject: any) {
  Object.keys(currentObject).forEach((keyCurrentObject) => {
    Object.keys(newDataObject).forEach((keyNewDataObject) => {
      if (keyCurrentObject === keyNewDataObject) {
        currentObject[keyCurrentObject] = newDataObject[keyNewDataObject];
      }
    });
  });

  return currentObject;
}

const dataUpdate = updateData(
  { name: 'Rafael', country: 'Chile', age: 42 },
  { name: 'Camiseta Polo', price: 59.9, amount: 30 }
);
console.log(dataUpdate);

}
```

Exercício 3

```javascript
import { useQuery } from 'react-query';
import { apiEx as api } from '../services/api';

export interface CharacterProps {
  name: string;
  gender: string;
  image: string;
  species: string;
}

type GetRickyAndMortyCharactersResponse = {
  totalCount: number;
  response: CharacterProps[];
};

export async function getRickyAndMortyCharacters(
  page: number
): Promise<GetRickyAndMortyCharactersResponse> {
  const { data } = await api.get('/character', {
    params: {
      page: page,
    },
  });

  const totalCount = data.info.count;

  const response = data.results.map((data: CharacterProps) => {
    return {
      nome: data.name,
      genero: data.gender,
      avatar: data.image,
      especie: data.species,
    };
  });

  return {
    response,
    totalCount,
  };
}

export function useRickyAndMortyCharacters(page: number) {
  return useQuery(['data', page], () => getRickyAndMortyCharacters(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
}
```

Exercício 4

```javascript
export function checkIfTheFirstLetterIsUppercase(text: string) {
  const result = text[0] === text[0].toUpperCase() ? true : false;
  return result;
}
```
