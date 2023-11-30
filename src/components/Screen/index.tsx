import React, {FC, PropsWithChildren} from 'react';

import {StyleProp, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Header from '../Header';

import useComponentStyles from './Screen.styles';

type Props = {
  withSafeAreaTopPadding?: boolean;
  withSafeAreaBottomPadding?: boolean;
  withHorizontalPadding?: boolean;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
};

const Screen: FC<PropsWithChildren<Props>> = ({
  withSafeAreaTopPadding = true,
  withSafeAreaBottomPadding = true,
  withHorizontalPadding = true,
  title,
  containerStyle,
  style,
  children,
}) => {
  const {top: safeAreaTopMargin, bottom: safeAreaBottomMargin} =
    useSafeAreaInsets();

  const styles = useComponentStyles({
    withSafeAreaTopPadding,
    withSafeAreaBottomPadding,
    withHorizontalPadding,
    withHeader: Boolean(title),
    safeAreaTopMargin,
    safeAreaBottomMargin,
  });

  return (
    <View style={[styles.container, containerStyle]}>
      {/* {Boolean(title) && <Header title={title} />} */}

      <View style={[styles.content, style]}>{children}</View>
    </View>
  );
};

export default Screen;
