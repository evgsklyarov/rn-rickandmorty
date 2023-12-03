import React, {FC, useState} from 'react';

import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import {useQuery} from '@apollo/client';
import {CharactersData, GET_CHARACTERS} from 'src/graphql/characters';
import Loader from 'src/components/Loader';

import List from './components/List';

const Characters: FC = () => {
  const [loadingMore, setLoadingMore] = useState(false);
  const [refetching, setRefetching] = useState(false);

  const {data, loading, error, fetchMore, refetch} = useQuery<CharactersData>(
    GET_CHARACTERS,
    {
      variables: {page: 1},
    },
  );

  const handleEndReached = async () => {
    try {
      console.log('handleEndReached run');

      if (loadingMore || !data?.characters.info.next) {
        return;
      }
      setLoadingMore(true);

      await fetchMore({
        variables: {
          page: data?.characters.info.next,
        },
        updateQuery: (previousResult, {fetchMoreResult}) => {
          if (!fetchMoreResult) {
            return previousResult;
          }

          return {
            characters: {
              ...fetchMoreResult.characters,
              results: [
                ...previousResult.characters.results,
                ...fetchMoreResult.characters.results,
              ],
            },
          };
        },
      });
      setLoadingMore(false);
    } catch {
      setLoadingMore(false);
    }
  };

  const handleRefetch = async () => {
    try {
      setRefetching(true);

      await refetch();

      setRefetching(false);
    } catch {
      setRefetching(false);
    }
  };

  return (
    <Screen>
      <Text type="header" text="Characters" />

      {loading && <Loader />}

      {error && <Text text={error.message} type="inattentive" />}

      <List
        list={data?.characters.results}
        loadingMore={loadingMore}
        fetchMore={handleEndReached}
        refreshing={refetching}
        onRefresh={handleRefetch}
      />
    </Screen>
  );
};

export default Characters;
