import { Image, View } from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { useSystem } from '@/powersync/Powersync'
const Index = () => {

  const router = useRouter()
  const { supabaseConnector } = useSystem();

  useEffect(() => {
    supabaseConnector.client.auth
      .getSession()
      .then(({ data }) => {
        if (data.session) {
          router.replace('/(tabs)');
        } else {
          throw new Error('Signin required');
        }
      })
      .catch(() => {
        router.replace('/login');
      });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
      <Image style={{height:'50%', aspectRatio:1}} source={require('../assets/images/AgriBooksLogo.png')} resizeMode='contain'/>
    </View>
  )
}

export default Index;
