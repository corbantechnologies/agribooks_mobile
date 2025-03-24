import { router } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import { TouchableOpacity, Text } from 'react-native'
import { colors } from '../constants/theme'

const BackButton = () => {
  return (
    <TouchableOpacity style={{backgroundColor:colors.primaryLightGreen, width:40, height:40, borderRadius:100, justifyContent:'center', alignItems:'center'}} onPress={()=>router.back()}>
        <CaretLeft size={24}/>
    </TouchableOpacity>
  )
}

export default BackButton