import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import SignIn from 'src/screens/auth/SignIn';
import SignUp from 'src/screens/auth/SignUp';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthStackNavigationProp<T extends keyof AuthStackParamList> =
  NavigationProp<AuthStackParamList, T>;

export type AuthStackRouteProp<T extends keyof AuthStackParamList> = RouteProp<
  AuthStackParamList,
  T
>;

const AuthStack: FC = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <Navigator id="Auth" screenOptions={{headerShown: false}}>
      <Screen name="SignIn" component={SignIn} />

      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default AuthStack;
