import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './Input.styles';

type Props = {
  label?: string;
  placeholder?: string;
  isSecure?: boolean;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
  errorMsg?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onChange: (text: string) => void;
};

const Input = ({
  label = '',
  placeholder = '',
  isSecure = false,
  value,
  keyboardType,
  disabled,
  errorMsg = '',
  containerStyle,
  onChange,
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={isSecure}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChange}
        editable={!disabled}
        style={styles.input}
      />
      {errorMsg && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMsg}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
