
import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { THEME } from './src/styles/theme';
import { Text } from 'react-native';
import Routes from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <NativeBaseProvider
      theme={THEME}
    >
      <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      {
        fontsLoaded ? <Routes /> :
          <Text>
            Loading...
          </Text>

      }
    </NativeBaseProvider>
  );
}
