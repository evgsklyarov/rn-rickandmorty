import React, {FC, PropsWithChildren, useMemo} from 'react';

import {Text as ReactNativeText, TextProps as RNTextProps} from 'react-native';

import styles from './Text.styles';
import colors from 'src/theme/colors';

export type TextProps = RNTextProps & {
  type?: 'default' | 'header' | 'inattentive' | 'action';
  text?: string;
};

const Text: FC<PropsWithChildren<TextProps>> = props => {
  const {type, text, children, style} = props;

  const typeStyle = useMemo(() => {
    switch (type) {
      case 'header':
        return styles.headerType;
      case 'inattentive':
        return styles.inattentiveType;
      case 'action':
        return styles.actionType;
      default:
        return undefined;
    }
  }, [type]);

  const content = text || children;

  return (
    <ReactNativeText
      selectionColor={colors.primaryActive}
      {...props}
      style={[styles.default, typeStyle, style]}>
      {content}
    </ReactNativeText>
  );
};

export default Text;
