import {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {AvoidSoftInput, useSoftInputState} from 'react-native-avoid-softinput';

type Args = {
  isAvoidEnabled?: boolean;
};

const useKeyboard = ({isAvoidEnabled}: Args = {}) => {
  const isFocused = useIsFocused();

  const {isSoftInputShown, softInputHeight} = useSoftInputState();

  useEffect(() => {
    if (isFocused && isAvoidEnabled) {
      AvoidSoftInput.setAdjustPan();
      AvoidSoftInput.setShouldMimicIOSBehavior(true);
      AvoidSoftInput.setEnabled(true);
    }
    return () => {
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  }, [isFocused, isAvoidEnabled]);

  return {
    isKeyboardOpened: isSoftInputShown,
    keyboardHeight: softInputHeight,
  };
};

export default useKeyboard;
