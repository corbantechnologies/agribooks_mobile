import { View, ScrollView, StatusBar, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/theme'
import Typography from '../../components/Typography'
import Feather from '@expo/vector-icons/Feather';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useSystem } from '@/powersync/Powersync';
const Home = () => {
  
    const router = useRouter()
    const { supabaseConnector } = useSystem();

  useEffect(() => {
      supabaseConnector.client.auth
        .getSession()
        .then(({ data }) => {
          if (!data.session) {
            throw new Error('Signin required');
          }else{
            console.log(data)
          }
        })
        .catch(() => {
          router.replace('/login');
        });
    }, []);
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.primaryBlue}}>
        <StatusBar translucent backgroundColor={colors.primaryGreen} />
            <View style={{backgroundColor:colors.primaryGreen, position:'relative', paddingBlockEnd:20, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                <View>
                <View style={{flexDirection:'row',padding:20, justifyContent:'space-between', alignItems:'center'}}>
                <View>
                  <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
                <Typography color='white' size={28} style={{fontFamily:'Rubik-Regular'}}>Hello,
                </Typography>
                <Typography color='white' size={28} style={{fontFamily:'Rubik-Medium'}}>Farmer Ligogo
                </Typography>
                  </View>
                <Typography color={colors.neutral200} size={16} style={{fontFamily:'Rubik-Regular'}}>Overview of your farm</Typography>
                </View>
                <View style={{backgroundColor:'white', alignItems:'center', justifyContent:'center', borderRadius:10, width:50, height:50}}>
                  <Image source={require('../../assets/images/favicon.png')} style={{width:40, height:40}} />
              </View>
                </View>
                <View style={{padding:20, backgroundColor:'white', borderRadius:20, marginHorizontal:20,}}>
                  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Typography color={colors.neutral500} size={20} style={{fontFamily:'Rubik-Regular'}}>Total Balance</Typography>
                <Typography color={colors.neutral500} size={16} style={{fontFamily:'Rubik-Medium'}}>All Farms</Typography>
                  </View>
                  <Typography color={colors.black} size={32} style={{fontFamily:'Rubik-Medium'}}>Ksh 5,300.00</Typography>
                  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <View>
                     <View style={{flexDirection:'row',gap:2, alignItems:'center'}}>
                      <Feather name="arrow-down" size={16} color={colors.primaryGreen} />
                      <Typography color={colors.neutral500} size={16} style={{fontFamily:'Rubik-Medium'}} >Investment</Typography>
                     </View>
                     <Typography color={colors.primaryGreen} size={20} style={{fontFamily:'Rubik-Medium'}} >Ksh 12,000</Typography>
                    </View>
                    <View>
                     <View style={{flexDirection:'row',gap:2, alignItems:'center'}}>
                     <Feather name="arrow-up" size={16} color={colors.rose} />
                      <Typography color={colors.neutral500} size={16} style={{fontFamily:'Rubik-Medium'}} >Expenses</Typography>
                     </View>
                     <Typography color={colors.rose} size={20} style={{fontFamily:'Rubik-Medium'}} >Ksh 6,700</Typography>
                    </View>
                    </View>
                </View>
                </View>
            </View>
            {/* scrollview */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{marginTop:20}}>
            <View style={{ marginHorizontal:20, gap:20 }}>
              <View style={{padding:20, borderRadius:20, backgroundColor:'white'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <Typography color={colors.black} size={24} style={{fontFamily:'Rubik-Medium'}}>Total Land Area</Typography>
                  <View style={{backgroundColor:colors.primaryLightGreen, padding:10, borderRadius:14}}>
                    <Image source={require('../../assets/images/field.png')} resizeMode='contain' style={{width:24, height:24}}/>
                  </View>
                </View>
                  <Typography color={colors.black} size={32} style={{fontFamily:'Rubik-Medium'}}>1,200 acres</Typography>
                  <Typography color={colors.neutral500} size={20} style={{fontFamily:'Rubik-Regular'}}>4 farms</Typography>
              </View>
            </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default Home