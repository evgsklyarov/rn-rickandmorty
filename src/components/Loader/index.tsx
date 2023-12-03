import React from 'react';
import {ActivityIndicator, StyleProp, View, ViewStyle} from 'react-native';

import colors from 'src/theme/colors';
import styles from './Loader.styles';

type Props = {
  size?: 'large' | 'small';
  color?: string;
  containerStyle?: StyleProp<ViewStyle>;
};
const Loader = ({
  size = 'large',
  containerStyle,
  color = colors.primary,
}: Props) => (
  <View style={[styles.container, containerStyle]}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

export default Loader;
