import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';

const {Navigator, Screen} = createStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        {false ? null : (
          // <Screen
          //   name="RootStack"
          //   component={RootStack}
          // />
          <Screen name="AuthStack" component={AuthStack} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
