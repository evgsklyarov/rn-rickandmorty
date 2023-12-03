import React, {FC} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Characters from 'src/screens/characters';

export type RootStackParamList = {
  Characters: undefined;
};

export type RootNavigationProp<T extends keyof RootStackParamList> =
  NavigationProp<RootStackParamList, T>;

export type RootRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

const RootStack: FC = () => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Characters" component={Characters} />
    </Navigator>
  );
};

export default RootStack;
