import { View, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import Typography from '../../components/Typography'
import Button from '../../components/Button'
import { colors } from '../../constants/theme'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <StatusBar translucent backgroundColor="transparent" />
      <View
      style={{flex:1}}>
      <ImageBackground 
      source={require('../../assets/images/splash6.jpg')}
      style={{flex:1}}
      resizeMode='cover'
      >
        <View style={{ position:'absolute', top:0, left:0,bottom:0, right:0, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.2)'}}></View>
        <View style={{padding:20, paddingTop:60}}>
          <Typography size={48} color='white' style={{fontFamily:'Rubik-Bold',}}>Welcome to AgriBooks</Typography>
          <Typography size={20} color='white' style={{ fontFamily:'Rubik-Regular'}}>Simplify your farm operations and cultivate success</Typography>
        </View>
      <View style={{flex:1, paddingHorizontal:20, paddingBottom:40, justifyContent:'flex-end'}}>
        <View>
        <Button onPress={()=>router.push('/login')} style={{backgroundColor:colors.primaryGreen, marginBottom:16}}>Login</Button>
        <Button onPress={()=>router.push('/register')} style={{backgroundColor:colors.brown}}>Create Account</Button>
        </View>
      </View>
      
      </ImageBackground>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome