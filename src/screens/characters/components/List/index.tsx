import React from 'react';
import {FlatList} from 'react-native';

import {Character} from 'src/graphql/characters';
import Loader from 'src/components/Loader';

import Item from '../Item';

type Props = {
  list?: Character[];
  loadingMore?: boolean;
  refreshing?: boolean;
  onRefresh: () => void;
  fetchMore: () => void;
};
const List = ({list, fetchMore, loadingMore, refreshing, onRefresh}: Props) => {
  return (
    <FlatList
      data={list}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loadingMore ? Loader : null}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

export default List;
