import { Image, Text, View } from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
const index = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.replace('/welcome')
    }, 3000)
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
      <Image style={{height:'50%', aspectRatio:1}} source={require('../assets/images/AgriBooksLogo.png')} resizeMode='contain'/>
    </View>
  )
}

export default index
