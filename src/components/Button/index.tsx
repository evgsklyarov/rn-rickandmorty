import React, {FC, useEffect, useMemo} from 'react';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
} from 'react-native';

import Text from 'src/components/Text';

import styles from './Button.styles';

export type ButtonProps = PressableProps & {
  isLoading?: boolean;
  variant?: 'contained' | 'outlined';
  title?: string;
  textStyle?: StyleProp<TextStyle>;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button: FC<ButtonProps> = props => {
  const {
    isLoading = false,
    variant = 'contained',
    title,
    style,
    disabled,
    textStyle,
    onPressIn,
    onPressOut,
  } = props;
  const isButtonDisabled = useMemo(
    () => isLoading || disabled,
    [isLoading, disabled],
  );

  const disabledViewOpacityShared = useSharedValue(0);
  const buttonOpacityShared = useSharedValue(1);

  const buttonVariantStyle = useMemo(() => {
    switch (variant) {
      case 'contained':
        return styles.buttonContained;
      case 'outlined':
        return styles.buttonOutlined;
      default:
        return undefined;
    }
  }, [variant]);

  const buttonDisabledVariantStyle = useMemo(() => {
    switch (variant) {
      case 'contained':
        return styles.buttonDisabled;
      case 'outlined':
        return styles.buttonDisabledOutlined;
      default:
        return undefined;
    }
  }, [variant]);

  const titleVariantStyle = useMemo(() => {
    switch (variant) {
      case 'outlined':
        return styles.titleOutlined;
      default:
        return undefined;
    }
  }, [variant]);

  const titleDisabledVariantStyle = useMemo(() => {
    switch (variant) {
      case 'contained':
        return styles.titleDisabledContainedButton;
      case 'outlined':
        return styles.titleDisabledOutlinedButton;
      default:
        return undefined;
    }
  }, [variant]);

  const buttonAnimatedStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(buttonOpacityShared.value, {duration: 200}),
    }),
    [],
  );

  const disabledViewAnimatedStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(disabledViewOpacityShared.value, {duration: 200}),
    }),
    [],
  );

  useEffect(() => {
    if (variant === 'contained') {
      if (isButtonDisabled) {
        disabledViewOpacityShared.value = 1;
      } else {
        disabledViewOpacityShared.value = 0;
      }
    }
  }, [disabledViewOpacityShared, isButtonDisabled, variant]);

  const onButtonPressIn = (event: GestureResponderEvent) => {
    buttonOpacityShared.value = 0.5;
    if (onPressIn) {
      onPressIn(event);
    }
  };

  const onButtonPressOut = (event: GestureResponderEvent) => {
    buttonOpacityShared.value = 1;
    if (onPressOut) {
      onPressOut(event);
    }
  };

  return (
    <AnimatedPressable
      {...props}
      disabled={isButtonDisabled}
      style={[
        styles.button,
        buttonAnimatedStyle,
        buttonVariantStyle,
        isButtonDisabled && buttonDisabledVariantStyle,
        style,
      ]}
      onPressIn={onButtonPressIn}
      onPressOut={onButtonPressOut}>
      <Animated.View
        style={[styles.disabledBackground, disabledViewAnimatedStyle]}
      />

      <Text
        text={title}
        style={[
          styles.title,
          titleVariantStyle,
          isButtonDisabled && titleDisabledVariantStyle,
          textStyle,
        ]}>
        {title}
      </Text>
    </AnimatedPressable>
  );
};

export default Button;
