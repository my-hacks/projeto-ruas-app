import { Heading, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

const RegisterUser: React.FC = () => {
  return (
    <>
      <VStack
        p={8}
        height="80%"
      >
        <Heading
          mt={8}
        >
          Cadastro de Novo Usuario
        </Heading>

        <ScrollView>
          <VStack mb={5}>
            <Text
              mb={2}
            >
              Nome
            </Text>
            <Input />
          </VStack>

          <VStack mb={5}>
            <Text
              mb={2}
            >
              Idade
            </Text>
            <Input />
          </VStack>

          <VStack mb={5}>
            <Text
              mb={2}
            >
              Endereço
            </Text>
            <Input />
          </VStack>

          <VStack mb={5}>
            <Text
              mb={2}
            >
              Ultimo Emprego
            </Text>
            <Input />
          </VStack>

          <VStack mb={5}>
            <Text
              mb={2}
            >
              Interesses / Habilidades - Separe por ;
            </Text>
            <Input />
          </VStack>
        </ScrollView>
      </VStack>
      <VStack
        height='20%'
        p={8}
      >
        <Button
          title="Cadastrar"
        />
      </VStack>
    </>
  );
}

export default RegisterUser;