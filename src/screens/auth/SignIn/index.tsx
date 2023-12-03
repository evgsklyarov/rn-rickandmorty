import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';

import Input from 'src/components/Forms/Input';
import Screen from 'src/components/Screen';
import AuthContainer from 'src/screens/auth/components/AuthContainer';
import {AuthStackNavigationProp} from 'src/navigation/AuthStack';
import {loginValidationSchema} from 'src/validation/schemas';

const SignIn: FC = () => {
  const navigation = useNavigation<AuthStackNavigationProp<'SignIn'>>();

  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: loginValidationSchema,
  });

  const [isSubmitLoading, setSubmitLoading] = useState(false);

  const onSignInPress = handleSubmit(async payload => {
    try {
      setSubmitLoading(true);
    } catch (error) {
    } finally {
      setSubmitLoading(false);
    }
  });

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Screen withSafeAreaBottomPadding={false} withHorizontalPadding={false}>
      <AuthContainer
        isSubmitLoading={isSubmitLoading}
        type="signIn"
        onSubmitPress={onSignInPress}
        onSwitchActionPress={onSignUpPress}>
        <Controller
          name="email"
          control={control}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <Input
              keyboardType="email-address"
              label="Email"
              placeholder="Input your email here"
              value={value}
              errorMsg={error?.message}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <Input
              isSecure
              label="Password"
              placeholder="Input your password here"
              value={value}
              errorMsg={error?.message}
              onChange={onChange}
            />
          )}
        />
      </AuthContainer>
    </Screen>
  );
};

export default SignIn;
