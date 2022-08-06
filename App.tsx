
import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { THEME } from './src/styles/theme';
import Home from './src/pages/Home';
import { Text } from 'react-native';


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
        fontsLoaded ? <Home /> :
          <Text>
            Loading...
          </Text>

      }
    </NativeBaseProvider>
  );
}
