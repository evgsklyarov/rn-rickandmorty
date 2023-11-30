import {gql} from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`;

export interface Character {
  id: string;
  name: string;
  image: string;
  created: string;
}

export interface CharactersData {
  characters: {
    results: Character[];
  };
}
