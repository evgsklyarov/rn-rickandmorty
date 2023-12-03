import {gql} from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        next
      }
      results {
        id
        name
        image
        created
      }
    }
  }
`;

export type Character = {
  id: string;
  name: string;
  image: string;
  created: string;
};

export type CharactersData = {
  characters: {
    info: {
      next: number | null;
    };
    results: Character[];
  };
};
