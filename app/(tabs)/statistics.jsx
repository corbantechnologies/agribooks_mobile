import { View, ScrollView, StatusBar, Image, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/theme'
import Typography from '../../components/Typography'
import Feather from '@expo/vector-icons/Feather';
import database from '@/db';
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
  return (
    <SafeAreaView style={{flex:1}}>
      <Typography>Statistics</Typography>
      <Button title='Create farm' onPress={createFarm}  />
      <Button title='Get farms' onPress={getFarms} />
    </SafeAreaView>
  )
}

export default Statistics