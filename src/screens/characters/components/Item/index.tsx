import React, {memo, useMemo} from 'react';
import {Image, View} from 'react-native';

import {Character} from 'src/graphql/characters';
import Text from 'src/components/Text';

import styles from './Item.styles';

type Props = {
  item: Character;
};

const Item = ({item}: Props) => {
  const formattedDate = useMemo(() => {
    const date = new Date(item.created);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
  }, [item.created]);

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text text={item.name} type="header" style={styles.name} />
        <Text text={formattedDate} style={styles.date} />
      </View>
    </View>
  );
};

export default memo(Item);
