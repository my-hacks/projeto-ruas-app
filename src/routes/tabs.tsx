import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Events from '../pages/AcompanyPeople';
import Jobs from '../pages/Jobs';
import { House, Suitcase, UsersFour, WaveTriangle } from 'phosphor-react-native'
import { Icon, useTheme } from 'native-base';
import Graph from '../pages/Graph';

const Tab = createBottomTabNavigator();

const RoutesTab = () => {
  const { colors } = useTheme();
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon
              as={<House color={colors.gray[300]} />}
            />
          )
        }}
      />
      <Tab.Screen name="Vagas" component={Jobs}
        options={{
          tabBarIcon: () => (
            <Icon
              as={<Suitcase color={colors.gray[300]} />}
            />
          )
        }}
      />
      {/* <Tab.Screen name="Pessoas" component={Jobs}
        options={{
          title: 'Acompanhamentos',
          tabBarIcon: () => (
            <Icon
              as={<UsersFour color={colors.gray[300]} />}
            />
          )
        }}
      /> */}
      <Tab.Screen name="Analises" component={Graph}
        options={{
          tabBarIcon: () => (
            <Icon
              as={<WaveTriangle color={colors.gray[300]} />}
            />
          )
        }}
      />

    </Tab.Navigator>

  );
}

export default RoutesTab;