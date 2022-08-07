import { useNavigation } from '@react-navigation/native';
import { Heading, Image, useTheme, VStack } from 'native-base';
import React from 'react';
import Button from '../../components/Button';

const Welcome: React.FC = () => {

  const navigation = useNavigation();
  const { colors } = useTheme();


  return (
    <VStack
      p={10}

    >
      <VStack
        alignItems={'center'}
        height={'90%'}
      >

        <Image
          source={require('../../assets/img/logo.png')}
          alt="Projeto Ruas"
          height={'100%'}
          width={'100%'}
          style={{
            resizeMode: 'contain',
          }}
        />
      </VStack>
      <VStack
      >
        <Button
          height={'10%'}
          title="Entrar"
          onPress={() => navigation.navigate('Home')}
          bg={colors.violet[500]}
        />
      </VStack>

    </VStack>

  )
}

export default Welcome;