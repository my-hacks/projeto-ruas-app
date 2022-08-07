import React from 'react';
import { View } from 'react-native';
import api from '../../services/api';

const AcompanyPeople: React.FC = () => {

  const [people, setPeople] = React.useState([]);

  const getPeople = async () => {
    try {
      const response = await api('/company/listPeople')
      const { data } = response.data;
      setPeople(data)
    } catch (error) {
      console.log(error)
    }
  }

  return <View />;
}

export default AcompanyPeople;