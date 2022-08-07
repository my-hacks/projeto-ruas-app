
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../pages/Welcome';
import RoutesTab from './tabs';
import DetailsJob from '../pages/DetailsJob';
import Graph from '../pages/Graph';
import RegisterUser from '../pages/RegisterUser';
import AcompanyPeople from '../pages/AcompanyPeople';
import DetailsAcompanyPeople from '../pages/AcompanyPeople/DetailsAcompanyPeople';

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
        <Stack.Screen name="AcompanyPeople" component={AcompanyPeople}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="DetailsAcompanyPeople" component={DetailsAcompanyPeople}
          options={{
            title: 'Detalhes'
          }}
        />
        <Stack.Screen name="RegisterUser" component={RegisterUser}
          options={{
            title: 'Cadastro de Usuario',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;