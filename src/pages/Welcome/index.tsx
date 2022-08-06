import { useNavigation } from '@react-navigation/native';
import { useScreenReaderEnabled, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import api from '../../services/api';

const Welcome: React.FC = () => {


  const navigation = useNavigation();

  return (
    <VStack
      p={10}
    >
      <Button
        title="Home"
        onPress={() => navigation.navigate('Graph')}
      />
    </VStack>

  )
}

export default Welcome;