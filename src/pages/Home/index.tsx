import React from 'react';
import { Heading, HStack, Image, Text, useTheme, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Home: React.FC = () => {

  const navigation = useNavigation()

  const proposes = [
    {
      id: 1,
      name: 'Extra',
      imgItem: require('../../assets/img/extra.png'),
      address: 'Rua dois, nº 0',
    },
    {
      id: 2,
      name: 'Extra',
      imgItem: require('../../assets/img/extra.png'),
      address: 'Rua dois, nº 0',
    },
    {
      id: 3,
      name: 'Extra',
      imgItem: require('../../assets/img/extra.png'),
      address: 'Rua dois, nº 0',
    },

  ]

  const { colors } = useTheme();

  const navigateToHome = () => {
    navigation.navigate('Home')
  }
  return (
    <>
      <Header />
      <VStack
        flex={1}
        bg="gray.50"
        p={8}
      >
        <HStack
          justifyContent={'flex-end'}
        >
          <Button
            title="Cadastrar Modarador"
            bg={colors.gray[300]}
            w="full"
            height={0}
          />
        </HStack>
        <Heading
          color={colors.black}
          mt={5}
          mb={5}
        >
          Visitas Recentes
        </Heading>
        {/* {
        proposes.map(propose = > {
          return (
            <VStack
              mb={5}
              bg="white"
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailsJob')}
              >
                <HStack
                  borderWidth={0.5}
                  borderColor={colors.black}
                  p={2}
                  alignItems="center"
                  borderRadius={10}
                >
                  <Image
                    source={propose.imgItem}
                    alt="extra"
                    height={50}
                    width={50}
                  />
                  <VStack
                    ml={5}
                  >
                    <Text
                      bold
                    >
                      {propose.name}
                    </Text>
                    <Text>
                      {propose.address}
                    </Text>
                  </VStack>

                </HStack>
              </TouchableOpacity>

            </VStack>
          )
        })
      } */}

      </VStack>
    </>

  )
}

export default Home;