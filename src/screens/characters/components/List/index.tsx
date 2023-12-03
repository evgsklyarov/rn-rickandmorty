import React, {useCallback} from 'react';
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
  const renderItem = useCallback(
    ({item}: {item: Character}) => <Item item={item} />,
    [],
  );
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loadingMore ? Loader : null}
      onRefresh={onRefresh}
      refreshing={refreshing}
      getItemLayout={(_, index) => ({
        length: 100,
        offset: (100 + 10) * index,
        index,
      })}
    />
  );
};

export default List;
