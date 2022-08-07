import { useNavigation } from '@react-navigation/native';
import { Badge, Button, Center, Divider, Heading, HStack, PresenceTransition, ScrollView, Text, useTheme, VStack } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import api from '../../services/api';

const AcompanyPeople: FC = () => {

  const [people, setPeople] = React.useState([]);

  const getPeople = async () => {
    try {
      const response = await api('/ong/listAcompanyPeople')
      const { data } = response.data;
      setPeople(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPeople()
  }, [])


  const [isOpen, setIsOpen] = useState(false);

  const { colors } = useTheme()

  const navigation = useNavigation();

  const navigateToDetails = (person) => {
    navigation.navigate('DetailsAcompanyPeople', { person })
  }

  return (
    <>
      <VStack
        p={8}
      >
        <Heading
          mb={8}
        >
          Ultimas Pessoas Visitadas
        </Heading>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {
            people.map(person => (
              <TouchableOpacity key={person.id}
                onPress={() => navigateToDetails(person)}
              >
                <VStack
                  borderRadius={10}
                  borderWidth={1}
                  borderColor="gray.300"
                  p={8}
                  mb={3}
                >
                  <HStack>
                    <Text bold fontSize={"lg"}>{person.name} </Text>
                    <Text bold fontSize={"lg"}>{person.last_name}</Text>
                  </HStack>

                  <HStack>
                    <Badge colorScheme={person.status === true ? "success" : "danger"}
                      mb={2}
                    >
                      <Text>
                        {person.status === true ? 'Empregado' : 'Desempregado'}
                      </Text>
                    </Badge>
                  </HStack>

                  <Text>
                    Ultima Visita : {person.date_expiration}
                  </Text>

                  <Text>
                    Ultimos Trabalhos
                  </Text>

                  {
                    person.last_jobs.map(job => (
                      <VStack key={job.id}>
                        <Divider my="2" />

                        <Text>
                          Cargo - {job.office}
                        </Text>
                        <Text>
                          Dia de Inicio - {job.date_start}
                        </Text>
                        <Text>
                          Dia de Saida - {job.date_end}
                        </Text>
                      </VStack>
                    ))
                  }

                </VStack>
              </TouchableOpacity>
            ))
          }
        </ScrollView>

      </VStack>
    </>
  )
}

export default AcompanyPeople;