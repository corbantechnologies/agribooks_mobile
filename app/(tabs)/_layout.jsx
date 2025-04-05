import { View, Text, Image, StyleSheet } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import * as Icons from 'phosphor-react-native'
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
        <Icons.House
          size={24}
          weight={focused ? 'fill':'regular'}
          color={focused ? colors.primaryGreen:colors.neutral400}
          />
        <Text style={{fontSize:14, width:'100%', marginTop:1, textAlign:'center', fontFamily:focused? 'Rubik-Medium' :'Rubik-Regular', color:focused? colors.primaryGreen : colors.neutral400}}>Home</Text>
    </View>
          
        )
        }}
        />
        <Tabs.Screen name='fields' options={{
        title:'Fields', 
        headerShown:false,
        tabBarIcon:({focused}) => (
          <View style={{marginTop:12, alignItems:'center'}}>
        <Icons.Farm
          size={24}
          weight={focused ? 'fill':'regular'}
          color={focused ? colors.primaryGreen:colors.neutral400}
          />
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
        <Icons.ChartBar
          size={24}
          weight={focused ? 'fill':'regular'}
          color={focused ? colors.primaryGreen:colors.neutral400}
          />
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
        <Icons.User
          size={24}
          weight={focused ? 'fill':'regular'}
          color={focused ? colors.primaryGreen:colors.neutral400}
          />
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