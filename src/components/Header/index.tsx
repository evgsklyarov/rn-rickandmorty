import React, {FC} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {StyleProp, View, ViewStyle} from 'react-native';

import Text from '../Text';

import useComponentStyles from './Header.styles';

type Props = {
  title?: string;
  style?: StyleProp<ViewStyle>;
};
const Header: FC<Props> = ({title, style}) => {
  const {top: safeAreaTopMargin} = useSafeAreaInsets();
  const styles = useComponentStyles({safeAreaTopMargin});

  return (
    <View style={[styles.container, style]}>
      <Text type="header" text={title} style={styles.title} />
    </View>
  );
};

export default Header;
