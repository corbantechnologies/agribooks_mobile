import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icons from 'phosphor-react-native'
import { colors } from '../../constants/theme'
import { router } from 'expo-router'

const settings = [
  {
    icon:
    <Icons.User
    size={24}
    weight={'fill'}
    color={colors.primaryGreen}
    />,
    title:'Edit Profile',
    onPress:()=>router.push('(modals)/profileModal'),
  },
  {
    icon:
    <Icons.Gear
    size={24}
    weight={'fill'}
    color={colors.primaryGreen}
    />,
    title:'Settings',
    onPress:()=>Alert.alert('Settings', 'This is the settings'),
  },
  {
    icon:
    <Icons.Lock
    size={24}
    weight={'fill'}
    color={colors.primaryGreen}
    />,
    title:'Privacy Policy',
    onPress:()=>Alert.alert('Privacy Policy', 'This is the privacy policy'),
  }
]

const SettingsItem = ({icon, title, onPress, showArrow=true}) => (
  <TouchableOpacity onPress={onPress} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingBlock:10}}>
    <View style={{flexDirection:'row', alignItems:'center', gap:6}}>
      <View style={{backgroundColor:colors.primaryLightGreen, padding:10, borderRadius:14}}>
      {icon}
      </View>
      <Text style={{fontSize:18, fontFamily:'Rubik-Medium'}}>{title}</Text>
    </View>
    {showArrow && 
    <Icons.CaretRight
    size={24}
    color={'black'}
    />
    }
  </TouchableOpacity>
)

const Profile = () => {
  const handleLogout = async()=>{
      Alert.alert("Confirm", "Are you sure you want to logout?", [
        {text:'Cancel', style:'cancel'},
        {text:'Logout', style:'destructive', onPress:()=>{
          router.replace('(auth)/login')
        }}
      ])
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
          icon={<Icons.SignOut size={24} color={colors.primaryGreen}/>} 
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
