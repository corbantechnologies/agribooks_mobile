import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../../../constants/theme'
import BackButton from '../../../../components/BackButton'
import Typography from '../../../../components/Typography'

const Division = () => {
  return (
    <SafeAreaView style={{flex:1, paddingHorizontal:16, backgroundColor:colors.primaryBlue}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingTop:10, marginBottom:20}}>
        <BackButton/>
          <Typography size={28} style={{fontFamily:'Rubik-SemiBold', textAlign:'center'}}>Division Details</Typography>
        <Image source={require('../../../../assets/images/favicon.png')} style={{width:50, height:50}} resizeMode='contain'/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{gap:20}}>
        <View style={{backgroundColor:'white', borderRadius:20, padding:16}}>
          <Typography size={24} style={{fontFamily:'Rubik-Medium', textAlign:'center'}}>Division Details</Typography>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Division