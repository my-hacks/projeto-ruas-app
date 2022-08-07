import { HStack, Image, ScrollView, Text, useTheme, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { Alert, View } from 'react-native';
import Button from '../../components/Button';
import api from '../../services/api';

const Jobs: React.FC = () => {

  const [jobs, setJobs] = React.useState([]);

  const getJobs = async () => {
    try {
      const response = await api('/company/listJobs')
      const { data } = response.data;
      setJobs(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getJobs()
  }, [])

  const { colors, fontSizes } = useTheme()

  return (
    <>
      <VStack
        flex={1}
        p={8}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {
            jobs.map(job => (
              <VStack key={job.id}
                bg="white"
                borderRadius={10}
                borderWidth={1}
                borderColor="gray.200"
                mb={4}
                p={4}
              >
                <HStack
                  alignItems={'center'}
                >
                  <Image
                    height={50}
                    width={50}
                    source={{ uri: String(job.logo) }}
                    alt={String(job.name)}
                    style={{
                      resizeMode: 'contain',
                    }}
                  />
                  <Text ml={4}>{job.company.toUpperCase()}</Text>
                </HStack>
                <Text
                  fontSize={"md"}
                >Cargo : {job.office}</Text>

                <Text>Descrição: {job.description}</Text>
                <HStack justifyContent={"flex-end"}>
                  <Button
                    onPress={() => {
                      Alert.alert(
                        'Aviso',
                        'Confirmar entrevista com a empreasa!?',
                        [
                          { text: 'Não', onPress: () => { } },
                          { text: 'Sim', onPress: () => { } },
                        ],
                        { cancelable: false }
                      )
                    }}
                    title="Agendar Entrevista"
                    w="50%"
                    mt={4}
                    style={{
                      height: 50,
                      backgroundColor: colors.red[500],
                    }}
                  >
                    style
                  </Button>
                </HStack>

              </VStack>
            ))
          }
        </ScrollView>

      </VStack>
    </>
  )
}

export default Jobs;