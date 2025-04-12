import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { colors } from '../constants/theme'
import Entypo from '@expo/vector-icons/Entypo';

const BackButton = () => {
  return (
    <TouchableOpacity style={{backgroundColor:colors.primaryLightGreen, width:40, height:40, borderRadius:100, justifyContent:'center', alignItems:'center'}} onPress={()=>router.back()}>
        <Entypo name="chevron-thin-left" size={20} color="black" />
    </TouchableOpacity>
  )
}

export default BackButton