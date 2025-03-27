import { View, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/theme'
import Typography from '../../components/Typography'
import { Farm, MapPin, ArrowDown, ArrowUp } from 'phosphor-react-native'
const Home = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.primaryBlue}}>
        <StatusBar translucent backgroundColor={colors.primaryGreen} />
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
            <View style={{backgroundColor:colors.primaryGreen, position:'relative', height:320, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
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
                      <ArrowDown color={colors.primaryGreen} size={16}/>
                      <Typography color={colors.neutral500} size={16} style={{fontFamily:'Rubik-Medium'}} >Investment</Typography>
                     </View>
                     <Typography color={colors.primaryGreen} size={20} style={{fontFamily:'Rubik-Medium'}} >Ksh 12,000</Typography>
                    </View>
                    <View>
                     <View style={{flexDirection:'row',gap:2, alignItems:'center'}}>
                      <ArrowUp color={colors.rose} size={16}/>
                      <Typography color={colors.neutral500} size={16} style={{fontFamily:'Rubik-Medium'}} >Expenses</Typography>
                     </View>
                     <Typography color={colors.rose} size={20} style={{fontFamily:'Rubik-Medium'}} >Ksh 6,700</Typography>
                    </View>
                    </View>
                </View>
                </View>
                {/* weather card */}
              <View style={{backgroundColor:'white', flex:1, borderRadius:20, marginHorizontal:20, padding:20, position:'absolute', top:270, zIndex:100, left:0,right:0, height:200}}>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                      <View style={{backgroundColor:colors.primaryGreen, flexDirection:'row', alignItems:'center', gap:5, paddingHorizontal:16, paddingVertical:8,borderRadius:60, marginBottom:10}}>
                        <MapPin color='white' size={20}/>
                        <Typography color='white' size={18} style={{fontFamily:'Rubik-Regular'}}>Kiambu</Typography>
                      </View>
                  <Typography color={colors.black} size={28} style={{fontFamily:'Rubik-Medium'}}>Sunday</Typography>
                  <Typography color={colors.neutral500} size={16} style={{fontFamily:'Rubik-Medium'}}>01 Apr 2025</Typography>
                  <Typography color={colors.black} size={28} style={{fontFamily:'Rubik-Medium'}}>24°C</Typography>
                  <Typography color={colors.neutral500} size={16} style={{fontFamily:'Rubik-Medium'}}>High: 27 {' '} Low: 18</Typography>

                    </View>
                    <View>
                      <Image source={require('../../assets/images/cloudyWeather.png')} style={{width:100, height:100}}/>
                      <Typography color={colors.black} size={28} style={{fontFamily:'Rubik-Medium'}}>Cloudy</Typography>
                      <Typography color={colors.neutral500} size={16} style={{fontFamily:'Rubik-Medium'}}>Feels like 26</Typography>
                    </View>
                  </View>
              </View>
            </View>
            {/* scrollview */}
            <View style={{marginTop:170, marginHorizontal:20, gap:20 }}>
              <View style={{padding:20, borderRadius:20, backgroundColor:'white'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <Typography color={colors.black} size={24} style={{fontFamily:'Rubik-Medium'}}>Total Land Area</Typography>
                  <View style={{backgroundColor:colors.primaryLightGreen, padding:10, borderRadius:14}}>
                    <Farm
                      size={24}
                      color={colors.primaryGreen}
                      weight={'fill'}
                    />
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