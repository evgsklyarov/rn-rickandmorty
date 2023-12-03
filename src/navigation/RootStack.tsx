import React, {FC} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenView from 'src/components/Screen';

// import Showcase from 'src/screens/root/Showcase';
// import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  TabNavigator: undefined;
  Showcase: undefined;
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
      {/* <Screen name="TabNavigator" component={TabNavigator} /> */}

      <Screen name="Showcase" component={ScreenView} />
    </Navigator>
  );
};

export default RootStack;
