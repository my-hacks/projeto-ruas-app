import { useRoute } from '@react-navigation/native';
import { Divider, Heading, Text, VStack } from 'native-base';
import { LineChart, Grid } from 'react-native-svg-charts'

import React, { FC, useState } from 'react';

const DetailsAcompanyPeople: FC = () => {

  const [tabPage, setTabPage] = useState(0);

  const onChangeTab = (changeTabProps) => {
    const newTabIndex = changeTabProps.i;
    setTabPage(newTabIndex);
  };

  const route = useRoute();

  const { person } = route.params;

  const generateRandomNumbersForArray = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 100));
    }
    return array;
  }

  const data = generateRandomNumbersForArray();

  return (
    <VStack
      p={8}
    >
      <Text>
        {person.name} {person.last_name}
      </Text>
      <Heading>
        Histórico e Métricas
      </Heading>
      <VStack>
        {
          person.last_jobs.map(data => {
            return (
              <VStack key={data.id}>
                <Text>{data.office}</Text>
                <VStack>
                  <Text>Inicio: {data.date_start}</Text>
                  <Text>Saida: {data.date_end}</Text>
                </VStack>

                <Divider my="2" />
              </VStack>

            )
          })
        }
      </VStack>

      <VStack>
        <Heading>
          Grafico de Desempenho Geral
        </Heading>
        <LineChart
          style={{ height: 200 }}
          data={data}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>

        <Text>
          Estás métricas mostram que é necessário um acompanhamento mais proximo por parte da assitente social
        </Text>
      </VStack>


    </VStack>
  );
}

export default DetailsAcompanyPeople;