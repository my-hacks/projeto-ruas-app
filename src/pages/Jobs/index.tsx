import { Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { View } from 'react-native';
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

  return (
    <>
      <VStack
        flex={1}
        p={8}
      >
        {
          jobs.map(job => (
            <View key={job.id}>
              <Text>{job.company}</Text>
              <Text>{job.office}</Text>
              <Text>{job.description}</Text>
              <Text>{job.logo}</Text>
            </View>
          ))
        }
      </VStack>
    </>
  )
}

export default Jobs;