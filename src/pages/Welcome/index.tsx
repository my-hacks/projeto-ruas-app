import { useNavigation } from '@react-navigation/native';
import { VStack } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';

const Welcome: React.FC = () => {

  const navigation = useNavigation();

  return (
    <VStack
      p={10}
    >
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </VStack>

  )
}

export default Welcome;