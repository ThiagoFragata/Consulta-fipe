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
