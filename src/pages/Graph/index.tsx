import React from 'react';
import { LineChart, Grid } from 'react-native-svg-charts'
import { PieChart } from 'react-native-svg-charts'


const Graph: React.FC = () => {

  const generateRandomNumbersForArray = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 100));
    }
    return array;
  }

  const data = generateRandomNumbersForArray();

  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

  const pieData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }))


  return (
    <LineChart
      style={{ height: 200 }}
      data={data}
      svg={{ stroke: 'rgb(134, 65, 244)' }}
      contentInset={{ top: 20, bottom: 20 }}
    >
      <Grid />
    </LineChart>
  );
}

export default Graph;