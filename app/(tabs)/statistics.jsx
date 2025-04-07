import { View, ScrollView, StatusBar, Image, Button, FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/theme'
import Typography from '../../components/Typography'
import Feather from '@expo/vector-icons/Feather';
import database from '@/db';
import { useEffect, useState } from 'react';
const Statistics = () => {
  const createFarm = async()=> {
    await database.write(async () => {
      await database.get('farms').create(farm => {
        farm.name = 'Chemelil farm';
        farm.investment = 60000;
        farm.location = 'Mbogo 2, Chemelil';
      });
    })
  }
  const getFarms = async () => {
    const farms = await database.get('farms').query().fetch();
    console.log(farms)
  }
  const [farms, setFarms] = useState([])
  useEffect(()=>{
    const fetchFarms = async () => {
      const farms = await database.get('farms').query().fetch();
      setFarms(farms)
    }
    fetchFarms();
  },[])
  return (
    <SafeAreaView style={{flex:1}}>
      <Typography>Statistics</Typography>
      <Button title='Create farm' onPress={createFarm}  />
      <FlatList
      data={farms}
      contentContainerStyle={{gap:5}}
      keyExtractor={item => item.id}
      renderItem={({item})=>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.location}</Text>
          <Text>{item.investment}</Text>
        </View>
      }
      />
    </SafeAreaView>
  )
}

export default Statistics