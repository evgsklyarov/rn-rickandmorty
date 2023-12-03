import React, {FC, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Controller, useForm} from 'react-hook-form';

import {registerValidationSchema} from 'src/validation/schemas';

import {AuthStackNavigationProp} from 'src/navigation/AuthStack';

import Screen from 'src/components/Screen';
import Input from 'src/components/Forms/Input';

import AuthContainer from '../components/AuthContainer';
import {register} from 'src/utils/fakeAuthApi';
import useAuth from 'src/hooks/useAuth';

const SignUp: FC = () => {
  const navigation = useNavigation<AuthStackNavigationProp<'SignUp'>>();
  const {login} = useAuth();

  const {control, handleSubmit, setError} = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: registerValidationSchema,
  });

  const [isSubmitLoading, setSubmitLoading] = useState(false);

  const onSignUpPress = handleSubmit(async payload => {
    try {
      setSubmitLoading(true);

      await register(payload);

      await login({
        email: payload.email,
        password: payload.password,
      });
    } catch (error) {
      setError('confirmPassword', {message: error.message});
    } finally {
      setSubmitLoading(false);
    }
  });

  const onSignInPress = async () => {
    navigation.navigate('SignIn');
  };

  return (
    <Screen withSafeAreaBottomPadding={false} withHorizontalPadding={false}>
      <AuthContainer
        isSubmitLoading={isSubmitLoading}
        type="signUp"
        onSubmitPress={onSignUpPress}
        onSwitchActionPress={onSignInPress}>
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
              disabled={isSubmitLoading}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <Input
              isSecure
              label="Password"
              placeholder="Input your password here"
              value={value}
              errorMsg={error?.message}
              onChange={onChange}
              disabled={isSubmitLoading}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <Input
              isSecure
              label="Confirm Password"
              placeholder="Input your password here"
              value={value}
              errorMsg={error?.message}
              onChange={onChange}
              disabled={isSubmitLoading}
            />
          )}
        />
      </AuthContainer>
    </Screen>
  );
};

export default SignUp;
