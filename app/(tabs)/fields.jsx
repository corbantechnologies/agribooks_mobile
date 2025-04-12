import { View, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/theme'
import Typography from '../../components/Typography'
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router'
const Fields = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.primaryBlue, position:'relative'}}>
        <StatusBar translucent backgroundColor={colors.primaryGreen} />
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
          <View style={{position:'relative'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:20, backgroundColor:colors.primaryGreen, paddingBottom:40}}>
              <View>
              <Typography color='white' size={32} style={{fontFamily:'Rubik-Medium'}}>My Farms</Typography>
              <Typography color={colors.neutral300} size={16} style={{fontFamily:'Rubik-Regular'}}>Overview of your farms</Typography>
              </View>
              <View style={{backgroundColor:'white', alignItems:'center', justifyContent:'center', borderRadius:10, width:50, height:50}}>
                  <Image source={require('../../assets/images/favicon.png')} style={{width:40, height:40}} />
              </View>
            </View>
            <View style={{ gap:20,borderTopLeftRadius:14, borderTopRightRadius:14, height:20, paddingTop:20, backgroundColor:colors.primaryBlue, position:'absolute', bottom:-10, zIndex:50, left:0, right:0}}></View>
          </View>
          <View style={{padding:16, gap:20}}>
            {farmActivities.map((activity, index) => (
          <View key={index} style={{backgroundColor:'white',borderRadius:16, padding:20}}>
            <Typography size={24} style={{fontFamily:'Rubik-Medium'}}>{activity.farmName}</Typography>
            <View style={{flexDirection:'row', gap:5, alignItems:'center'}}>
              <Feather name="map-pin" size={17} color={colors.primaryGreen} />
              <Typography color={colors.primaryGreen} size={19} style={{fontFamily:'Rubik-Regular'}}>{activity.farmLocation}</Typography>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', gap:5, marginTop:5}}>
            <Typography size={20} style={{fontFamily:'Rubik-Regular',marginLeft:5}}>4 divisions</Typography>
            <TouchableOpacity style={{flexDirection:'row', borderWidth:1, borderColor:colors.primaryGreen, borderRadius:5, padding:8, alignItems:'center', gap:5, marginTop:5}} onPress={()=>router.push(`/(farms)/${activity.farmName}`)}>
              <Typography size={16} style={{fontFamily:'Rubik-Regular'}}>View Details</Typography>
              <Feather name="arrow-up-right" size={18} color={colors.primaryGreen} />
            </TouchableOpacity>
            </View>
          </View>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity style={{flexDirection:'row', position:'absolute', bottom:20,right:20, zIndex:50, alignItems:'center', gap:10, backgroundColor:colors.primaryGreen, padding:10, borderRadius:10}}>
        <Feather name="plus-circle" size={18} color='white' />
                  <Typography color='white' size={16} style={{fontFamily:'Rubik-Medium'}}>Add Farm</Typography>
                </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Fields

const farmActivities = [
  {
    farmName: "Sunrise Acres",
    farmLocation: "Nairobi, Kenya",
    lastActivity: "Harvested",
    performedBy: "John Doe",
    performedWhen: "10/01/2025"
  },
  {
    farmName: "Green Valley Farm",
    farmLocation: "Kisumu, Kenya",
    lastActivity: "Planted",
    performedBy: "Jane Smith",
    performedWhen: "15/02/2025"
  },
  {
    farmName: "Riverbend Orchards",
    farmLocation: "Nakuru, Kenya",
    lastActivity: "Sprayed",
    performedBy: "David Lee",
    performedWhen: "16/03/2025"
  },
  {
    farmName: "Mountain View Dairy",
    farmLocation: "Eldoret, Kenya",
    lastActivity: "Milked",
    performedBy: "Sarah Jones",
    performedWhen: "04/03/2025"
  },
  {
    farmName: "Golden Fields Farm",
    farmLocation: "Mombasa, Kenya",
    lastActivity: "Fertilizer",
    performedBy: "Michael Brown",
    performedWhen: "26/02/2025"
  },
  {
    farmName: "Hillside Hives",
    farmLocation: "Nyeri, Kenya",
    lastActivity: "Harvested",
    performedBy: "Emily Wilson",
    performedWhen: "31/01/2025"
  },
  {
    farmName: "Valley Vines",
    farmLocation: "Machakos, Kenya",
    lastActivity: "Pruned",
    performedBy: "Robert Garcia",
    performedWhen: "01/11/2025"
  },
    {
    farmName: "Plateau Poultry",
    farmLocation: "Kakamega, Kenya",
    lastActivity: "Vaccinated",
    performedBy: "Jessica Rodriguez",
    performedWhen: "02/11/2025"
  }
];
