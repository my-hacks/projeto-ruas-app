import { useNavigation } from '@react-navigation/native';
import { Divider, HStack, ScrollView, Text, useTheme, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Button from '../../../components/Button';
import api from '../../../services/api';

const SugestJobs: React.FC = () => {

  const [jobs, setJobs] = useState([]);

  const getSugestJobs = async () => {
    try {
      const response = await api('/ong/listReferencesJobs')
      const { data } = response.data;
      setJobs(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSugestJobs()
  }, [])

  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <>
      <VStack
        p={8}
        height="90%"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {
            jobs.map(job => (
              <VStack key={job.id}
              >
                <Text
                  fontSize={'lg'}>
                  {job.office}</Text>
                <Text>
                  Data de Expiração - {job.expiration_date}
                </Text>
                <Text>
                  {job.status === true ? 'Aberto' : 'Fechado'}
                </Text>
                <Text>
                  Descrição: {job.description}
                </Text>
                <HStack
                  justifyContent={"flex-end"}
                >
                  <Button
                    mt={2}
                    mb={2}

                    style={{
                      height: 40,
                      width: '50%',
                      backgroundColor: '#00a8ff',
                    }}
                    title="Agendar Entrevista"
                    onPress={() => {
                      Alert.alert(
                        'Agendar Entrevista',
                        'Deseja agendar uma entrevista para esta vaga?',
                        [
                          { text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                          {
                            text: 'Sim', onPress: () => {
                              navigation.navigate('Home')
                            }
                          },
                        ]
                      )
                    }}
                  />
                </HStack>
                <Divider my="2" />
              </VStack>

            ))
          }
        </ScrollView>

      </VStack>
      <VStack
        // p={8}
        pl={8}
        pr={8}
        height={'10%'}
      >
        <Button
          style={{
            backgroundColor: '#2cae6b'
          }}
          title="Finalizar"
          onPress={() => {
            navigation.navigate('Home')
          }}
        />
      </VStack>
    </>

  );
}

export default SugestJobs;