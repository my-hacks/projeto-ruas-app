import React, { useEffect } from 'react';
import { Divider, Heading, HStack, ScrollView, Text, useTheme, VStack } from 'native-base'

import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import Popover from './Popover';
import api from '../../services/api';

const Home: React.FC = () => {

  const navigation = useNavigation()

  const [lastVisits, setLastVisits] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { colors } = useTheme();

  const getLastVisits = async () => {
    try {
      const response = await api('/ong/listLastVisits')
      const { data } = response.data;
      setLastVisits(data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getLastVisits()
  }, [])

  return (
    <>
      <Header />
      <VStack
        flex={1}
        bg="gray.50"
        p={8}
      >
        <Heading
          color={colors.black}
          // mt={5}
          mb={5}
        >
          Visitas Recentes
        </Heading>

        <Divider my="2" />

        <ScrollView showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
          }}
        >
          {/* //Lista de ultimas visitas */}

          {
            lastVisits?.map(visit => (
              <HStack key={visit.id}
                borderWidth={1}
                borderRadius={10}
                borderColor={colors.gray[200]}
                mb={3}
                p={3}
              >
                <VStack>
                  <HStack>
                    <Text>Nome: </Text>
                    <Text>{visit.first_name} </Text>
                    <Text>{visit.last_name}</Text>
                  </HStack>
                  <HStack>
                    <Text>Sexo: {visit.gender === 'male' ? 'Homem' : 'Mulher'}</Text>
                  </HStack>
                  <HStack>
                    <Text>Ultima Localicação - {visit.location}</Text>
                  </HStack>
                  <Text>{visit.city}</Text>
                </VStack>
              </HStack>
            ))
          }
        </ScrollView>

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
        <HStack
          height={50}
          justifyContent="flex-end"
          style={{
            position: 'absolute',
            bottom: 150,
            right: 10,
          }}
        >
          <Popover />
        </HStack>
      </VStack>

    </>

  )
}

export default Home;