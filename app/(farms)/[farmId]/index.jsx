import { View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from '@expo/vector-icons/Feather';
import Typography from '../../../components/Typography'
import BackButton from '../../../components/BackButton'
import { colors } from '../../../constants/theme'
import { useRouter } from 'expo-router'
const SingleFarm = () => {
    const router = useRouter()
  return (
    <SafeAreaView style={{flex:1, paddingHorizontal:16, backgroundColor:colors.primaryBlue}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingTop:10, marginBottom:20}}>
        <BackButton/>
          <Typography size={28} style={{fontFamily:'Rubik-SemiBold', textAlign:'center'}}>My Farm</Typography>
        <Image source={require('../../../assets/images/favicon.png')} style={{width:50, height:50}} resizeMode='contain'/>
      </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{gap:20}}>
            <View style={{backgroundColor:colors.primaryLightGreen, padding:16, borderRadius:20}}>
                <Typography size={30} color='black' style={{fontFamily:'Rubik-Medium', textAlign:'center'}}>Green Valley Farm</Typography>
                <View style={{flexDirection:'row', gap:5, alignItems:'center',justifyContent:'center'}}>
                <Feather name="map-pin" size={17} color={colors.neutral900} />
                    <Typography color={colors.neutral900} size={18} style={{fontFamily:'Rubik-Regular'}}>Delmonte, Thika</Typography>
                </View>
                <Typography size={20} color='black' style={{fontFamily:'Rubik-Medium', textAlign:'center'}}>20 acres - 4 divisions</Typography>
                <View style={{borderTopWidth:0.2, borderTopColor:colors.neutral400, paddingTop:10, marginTop:10 }}>
                    <Typography color={colors.neutral900} size={20} style={{fontFamily:'Rubik-Regular'}}>Total Balance</Typography>
                    <Typography color='black' size={28} style={{fontFamily:'Rubik-Medium'}}>Ksh 5,300.00</Typography>
                    <View style={{flexDirection:'row', marginTop:5, alignItems:'center', justifyContent:'space-between'}}>
                        <View>
                            <View style={{flexDirection:'row',gap:2, alignItems:'center'}}>
                            <Feather name="arrow-down" size={17} color={colors.neutral900} />
                                <Typography color={colors.neutral900} size={20} style={{fontFamily:'Rubik-Regular'}} >Investment</Typography>
                            </View>
                            <Typography color='black' size={20} style={{fontFamily:'Rubik-Medium'}} >Ksh 12,000</Typography>
                        </View>
                        <View>
                            <View style={{flexDirection:'row',gap:2, alignItems:'center'}}>
                            <Feather name="arrow-up" size={17} color={colors.neutral900} />
                                <Typography color={colors.rose} size={20} style={{fontFamily:'Rubik-Regular'}} >Expenses</Typography>
                        </View>
                        <Typography color='red' size={20} style={{fontFamily:'Rubik-Regular'}} >- Ksh 6,700</Typography>
                    </View>
                </View>
            </View>
            </View>
            <View style={{backgroundColor:'white', borderRadius:20, padding:16}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:16}}>
                <Typography size={24} style={{fontFamily:'Rubik-Medium', textAlign:'center'}}>Farm divisions</Typography>
                <TouchableOpacity activeOpacity={0.5} style={{flexDirection:'row', alignItems:'center', gap:2}}>
                <Feather name="plus-circle" size={17} color={colors.primaryGreen} />
                <Typography size={16} color={colors.primaryGreen} style={{fontFamily:'Rubik-Regular', textAlign:'center'}}>Add division</Typography>
                </TouchableOpacity>
                </View>
                {farmDivisions.map((division, index) => (
          <View key={index} style={{marginBottom:16, backgroundColor:colors.primaryLightGreen, borderWidth:0.1, borderColor:colors.neutral300, padding:10, borderRadius:10}}>
            <Typography size={22} style={{fontFamily:'Rubik-Medium'}}>{division.divisionName}</Typography>
            <Typography size={20} style={{fontFamily:'Rubik-Medium'}}>{division.plantedCrop}</Typography>
            <View style={{flexDirection:'row', gap:5, alignItems:'center', marginLeft:3}}>
              <Typography size={15} color={colors.neutral500} style={{fontFamily:'Rubik-Regular'}}>Last activity:</Typography>
              <Typography size={16} style={{fontFamily:'Rubik-Regular'}}>{division.lastActivity} - {division.plantingDate}</Typography>
            </View>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', gap:5, marginTop:8}} onPress={()=>router.push(`/(farms)/1/${division.divisionName}`)}>
              <Typography size={16} style={{fontFamily:'Rubik-Regular'}}>View Details</Typography>
              <Feather name="arrow-up-right" size={18} color={colors.primaryGreen} />
            </TouchableOpacity>
          </View>
            ))}
      </View>
           
                </ScrollView>
    </SafeAreaView>
  )
}

export default SingleFarm

const farmDivisions = [
    {
      divisionName: "Division A - Corn Fields",
      plantedCrop: "Hybrid Corn",
      plantingDate: "2023-04-15",
      lastActivity: "Harvested Corn",
    },
    {
      divisionName: "Division B - Tomato Greenhouses",
      plantedCrop: "Roma Tomatoes",
      plantingDate: "2023-06-01",
      lastActivity: "Sprayed Pesticides",
    },
    {
      divisionName: "Division C - Potato Fields",
      plantedCrop: "Dutch Robjin Potatoes",
      plantingDate: "2023-05-10",
      lastActivity: "Planted Potatoes",
    },
    {
      divisionName: "Division D - Mixed Vegetables",
      plantedCrop: "Carrots, Kale, Spinach",
      plantingDate: "2023-07-01",
      lastActivity: "Applied Fertilizer",
    }
  ];
  