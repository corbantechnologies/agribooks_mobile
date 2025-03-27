import { View, Text, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/BackButton'
import Typography from '@/components/Typography'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import FormField from '../../components/FormField'
import { colors } from '../../constants/theme'

const profileModal = () => {
    const [form, setForm] = useState({
        email: 'test@gmail.com',
        phone: '0710507872',
      })
      const submit = async () =>{
       Alert.alert('Profile Updated')
    }
      
  return (
    <SafeAreaView style={{flex:1, paddingHorizontal:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingTop:20}}>
        <BackButton/>
        <Typography size={32} style={{fontFamily:'Rubik-Medium'}}>Update Profile</Typography>
        <Text style={{color:'transparent'}}>Update</Text>
      </View>
      <View style={{marginTop:30}}>
      <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e)=>setForm({...form, email:e})}
          keyboardType="email-address"
          placeholder='Your email'
          />
      <FormField
          title="Phone Number"
          value={form.phone}
          handleChangeText={(e)=>setForm({...form, email:e})}
          keyboardType="numeric"
          />
          <Button onPress={submit} style={{backgroundColor:colors.primaryGreen, marginVertical:16}}>Update</Button>
      </View>
    </SafeAreaView>
  )
}

export default profileModal