import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Jobs from '../pages/Jobs';

const Tab = createBottomTabNavigator();

const RoutesTab = () => {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Profile" component={Events}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Jobs" component={Jobs}
        options={{ headerShown: false }}
      />

    </Tab.Navigator>

  );
}

export default RoutesTab;