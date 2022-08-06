
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../pages/Welcome';
import RoutesTab from './tabs';
import DetailsJob from '../pages/DetailsJob';
import Graph from '../pages/Graph';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome" component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="DetailsJob" component={DetailsJob} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="Home" component={RoutesTab}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;