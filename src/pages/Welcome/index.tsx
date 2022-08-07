import { useNavigation } from '@react-navigation/native';
import { Image, useTheme, VStack } from 'native-base';
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
        height={'80%'}
      >
        <Image
          source={require('../../assets/img/projeto_ruas.png')}
          alt="Projeto Ruas"
          mt={20}
        />
      </VStack>
      <VStack>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Home')}
          bg={colors.blue[700]}
        />
      </VStack>

    </VStack>

  )
}

export default Welcome;