import React, {FC, PropsWithChildren} from 'react';

import {ScrollView, View} from 'react-native';

import useKeyboard from 'src/hooks/useKeyboard';

import Text from 'src/components/Text';
import Button from 'src/components/Button';

import {AuthContainerType} from './AuthContainer.types';
import useAuthContainer from './AuthContainer.hook';
import styles from './AuthContainer.styles';

type Props = {
  isSubmitLoading?: boolean;
  type: AuthContainerType;
  onSubmitPress: () => void;
  onSwitchActionPress: () => void;
};

const AuthContainer: FC<PropsWithChildren<Props>> = ({
  isSubmitLoading,
  type,
  children,
  onSubmitPress,
  onSwitchActionPress,
}) => {
  const {isKeyboardOpened} = useKeyboard({isAvoidEnabled: false});

  const {
    titleText,
    descriptionText,
    submitButtonText,
    switcDesriptionText,
    swtichActionText,
  } = useAuthContainer(type);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator
        bounces={isKeyboardOpened}
        keyboardShouldPersistTaps="handled"
        style={styles.scrollContainer}
        contentContainerStyle={[
          styles.scrollContent,
          isKeyboardOpened && styles.scrollContentScrollable,
        ]}>
        <View style={styles.form}>
          <Text text={titleText} type="header" style={styles.title} />

          <Text
            text={descriptionText}
            type="inattentive"
            style={styles.description}
          />

          {children}

          <Button
            isLoading={isSubmitLoading}
            title={submitButtonText}
            style={styles.submitButton}
            onPress={onSubmitPress}
          />

          <View style={styles.switchContainer}>
            <Text>
              {`${switcDesriptionText} `}
              <Text
                type="action"
                text={swtichActionText}
                onPress={onSwitchActionPress}
              />
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthContainer;
