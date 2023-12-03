import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import Characters from 'src/screens/characters';
import Profile from 'src/screens/profile';

export type RootTabParamList = {
  Characters: undefined;
  Profile: undefined;
};

export type RootNavigationProp<T extends keyof RootTabParamList> =
  NavigationProp<RootTabParamList, T>;

export type RootRouteProp<T extends keyof RootTabParamList> = RouteProp<
  RootTabParamList,
  T
>;

const RootStack: FC = () => {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Characters" component={Characters} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default RootStack;
