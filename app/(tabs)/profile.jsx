import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/theme'
import { router } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather'
import { useSystem } from '@/powersync/Powersync';

const settings = [
  {
    icon:
    <FontAwesome name="user" size={26} color={colors.primaryGreen} />,
    title:'Edit Profile',
    onPress:()=>router.push('(modals)/profileModal'),
  },
  {
    icon:
    <FontAwesome name="gear" size={24} color={colors.primaryGreen} />,
    title:'Settings',
    onPress:()=>Alert.alert('Settings', 'This is the settings'),
  },
  {
    icon:
    <FontAwesome name="lock" size={26} color={colors.primaryGreen} />,
    title:'Privacy Policy',
    onPress:()=>Alert.alert('Privacy Policy', 'This is the privacy policy'),
  }
]

const SettingsItem = ({icon, title, onPress, showArrow=true}) => (
  <TouchableOpacity onPress={onPress} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingBlock:10}}>
    <View style={{flexDirection:'row', alignItems:'center', gap:6}}>
      <View style={{backgroundColor:colors.primaryLightGreen, width:44, height:44, alignItems:'center', justifyContent:'center', borderRadius:14}}>
      {icon}
      </View>
      <Text style={{fontSize:18, fontFamily:'Rubik-Medium'}}>{title}</Text>
    </View>
    {showArrow && 
    <FontAwesome name="angle-right" size={24} color="black" />
    }
  </TouchableOpacity>
)

const Profile = () => {
  const {supabaseConnector, powersync} = useSystem();
  const handleLogout = async()=>{
    console.log('clicked')
      await powersync.disconnectAndClear();
      await supabaseConnector.client.auth.signOut();
      router.replace('/login')
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.primaryBlue}}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBlockEnd:32, paddingInline:16}}
      >
        <Text style={{fontSize:24, fontFamily:'Rubik-Bold', textAlign:'center', marginTop:10}}>Profile</Text>
        <View style={{marginBlock:20, justifyContent:'center', display:'flex'}}>
            <Image source={require('../../assets/images/defaultAvatar.png')} style={{width:108, height:108, marginInline:'auto', borderRadius:60}} />
            <Text style={{fontSize:26, fontFamily:'Rubik-Bold', textAlign:'center'}}>Farmer Ligogo</Text>
        </View>
        <View>
          {settings.map((item, index)=>(
            <SettingsItem key={index} {...item} />
          )) }
        </View>
        <View>
          <SettingsItem 
          icon={<Feather name="log-out" size={20} color={colors.primaryGreen} />} 
          title='Logout' 
          showArrow={true} 
          onPress={handleLogout} 
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Profile
