import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import RootStack from './RootStack';
import useAuth from 'src/hooks/useAuth';

const {Navigator, Screen} = createStackNavigator();

const Navigation: FC = () => {
  const {user, loadingInitial} = useAuth();

  if (loadingInitial) {
    return null;
  }
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        {!user ? (
          <Screen name="RootStack" component={RootStack} />
        ) : (
          <Screen name="AuthStack" component={AuthStack} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
