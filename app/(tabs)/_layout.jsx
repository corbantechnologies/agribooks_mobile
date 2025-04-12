import { View, Text, Image, StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../constants/theme'

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel:false,
      tabBarInactiveTintColor:'',
      tabBarStyle:{
        borderTopWidth:0,
        height:60,
      }
    }}
    >
      <Tabs.Screen name='index' options={{
        title:'Home', 
        headerShown:false,
        tabBarIcon:({focused}) => (
          <View style={{marginTop:12, alignItems:'center'}}>
        
          <Ionicons name={focused ? 'home':'home-outline'} size={24} color={focused ? colors.primaryGreen:colors.neutral400} />
        <Text style={{fontSize:14, width:'100%', marginTop:1, textAlign:'center', fontFamily:focused? 'Rubik-Medium' :'Rubik-Regular', color:focused? colors.primaryGreen : colors.neutral400}}>Home</Text>
    </View>
          
        )
        }}
        />
        <Tabs.Screen name='fields' options={{
        title:'Fields', 
        headerShown:false,
        tabBarIcon:({focused}) => (
          <View style={{marginTop:16, alignItems:'center'}}>
          <Image source={require('../../assets/images/field.png')} resizeMode='contain' style={{width:24, height:24}}/>
        <Text style={{fontSize:14, width:'100%', marginTop:1, textAlign:'center', fontFamily:focused? 'Rubik-Medium' :'Rubik-Regular', color:focused? colors.primaryGreen : colors.neutral400}}>Farms</Text>
    </View>
        )
        }}
        />
      <Tabs.Screen name='statistics' options={{
        title:'Statistics', 
        headerShown:false,
        tabBarIcon:({focused}) => (
          <View style={{marginTop:12, alignItems:'center'}}>
        
          <Ionicons name={focused ? 'stats-chart':'stats-chart-outline'} size={24} color={focused ? colors.primaryGreen:colors.neutral400} />
        <Text style={{fontSize:14, width:'100%', marginTop:1, textAlign:'center', fontFamily:focused? 'Rubik-Medium' :'Rubik-Regular', color:focused? colors.primaryGreen : colors.neutral400}}>Statistics</Text>
    </View>
        )
        }}
        />
      
      <Tabs.Screen name='profile' options={{
        title:'Profile', 
        headerShown:false,
        tabBarIcon:({focused}) => (
          <View style={{marginTop:12, alignItems:'center'}}>
          <Ionicons name={focused ? 'person':'person-outline'} size={24} color={focused ? colors.primaryGreen:colors.neutral400} />
        <Text style={{fontSize:14, width:'100%', marginTop:1, textAlign:'center', fontFamily:focused? 'Rubik-Medium' :'Rubik-Regular', color:focused? colors.primaryGreen : colors.neutral400}}>Profile</Text>
    </View>
        )
        }}
        />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  iconText:{
    fontWeight:'900' 
  }
})