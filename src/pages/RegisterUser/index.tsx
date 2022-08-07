import { useNavigation } from '@react-navigation/native';
import { Heading, ScrollView, Text, useTheme, VStack } from 'native-base';
import React, { FC, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

const RegisterUser: FC = () => {

  const [loading, setLoading] = useState(false);

  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <>
      <VStack
        p={8}
        height="80%"
      >
        <Heading
        >
          Cadastro de Novo Usuario
        </Heading>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <VStack mb={5}>
            <Text
              mb={2}
            >
              Nome
            </Text>
            <Input
              value={'José Mauricio Souza'}
            />
          </VStack>

          <VStack mb={5}>
            <Text

              mb={2}
            >
              Idade
            </Text>
            <Input
              value={String(32)}
            />
          </VStack>

          <VStack mb={5}>
            <Text
              mb={2}
            >
              Endereço ( Onde está localizado hoje)
            </Text>
            <Input
              value={'Praça Princesa Isabel'}
            />
          </VStack>

          <VStack mb={5}>
            <Text
              mb={2}
            >
              Ultimo Emprego
            </Text>
            <Input
              value={'Operador de Empilhadeira'}
            />
          </VStack>

          <VStack mb={5}>
            <Text
              mb={2}
            >
              Interesses / Habilidades - Separe por ;
            </Text>
            <Input
              value={
                'pedreiro ; marcineiro'
              }
            />
          </VStack>
          <Button

            bg={colors.red[500]}
            title="Formulário DISC"
          />
        </ScrollView>
      </VStack>
      <VStack
        height='10%'
        p={8}
      >
        <Button
          onPress={() => {
            navigation.navigate('SugestJobs')
          }}
          title="Cadastrar"
        />
      </VStack>
    </>
  );
}

export default RegisterUser;