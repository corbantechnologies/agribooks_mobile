import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/theme'
import BackButton from '../../components/BackButton'
import Typography from '../../components/Typography'
import FormField from '../../components/FormField'
import Button from '../../components/Button'
import { useRouter } from 'expo-router'

const Register = () => {
    const router = useRouter()
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: ''
      })
      const [isSubmitting, setIsSubmitting] = useState(false);
      const submit = async () =>{
        if(!form.password || !form.email || !form.fullName){
          Alert.alert("Error", "Please fill in all the fields")
        }
        setIsSubmitting(true);
        try {
          router.replace('/home')
        } catch (error) {
          Alert.alert("Error",error)
        }finally{
          setIsSubmitting(false);
        }
      }
  return (
    <SafeAreaView style={{flex:1, padding:20, backgroundColor:colors.primaryBlue}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <BackButton/>
      <Image source={require('../../assets/images/favicon.png')} style={{ width:60, height:50, alignSelf:'center'}} resizeMode='contain'/>
        </View>
      <View style={{flex:1, gap:20, marginTop:40}}>
      <View>
        <Typography size={42} style={{fontFamily:'Rubik-Bold', textAlign:'center'}}>Sign Up</Typography>
        <Typography size={20} style={{ fontFamily:'Rubik-Regular', textAlign:'center'}}>Create your new account</Typography>
      </View>
      <View>
      <FormField
          title="Full Name"
          value={form.fullName}
          handleChangeText={(e)=>setForm({...form, email:e})}
          placeholder='Full name'
          />
      <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e)=>setForm({...form, email:e})}
          keyboardType="email-address"
          placeholder='Your email'
          />
          <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e)=>setForm({...form, password:e})}
          placeholder='******'
          />
          <Button onPress={submit} style={{backgroundColor:colors.primaryGreen, marginVertical:16}}>Signup</Button>
          <Typography size={16} color='#505050' style={{fontFamily:'Rubik-Regular', textAlign:'center'}}>Or sign in with</Typography>
          <TouchableOpacity activeOpacity={0.5} style={{width:'auto', borderWidth:0.5, marginBottom:16, borderColor:'#bcbcbc', borderRadius:50, marginTop:8, paddingBlock:10 }}>
            <View style={{display:'flex', flexDirection:'row', gap:8, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../../assets/icons/google.png')} style={{width:24, height:24}} resizeMode='contain'/>
            <Text style={{fontSize:18, fontFamily:'Rubik-Medium'}}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:2}}>
          <Typography size={16} color='#505050' style={{fontFamily:'Rubik-Regular', textAlign:'center'}}>Already have an account? </Typography>
          <TouchableOpacity onPress={()=>router.navigate('/login')}> 
            <Text style={{color:colors.primaryGreen, fontSize:16, fontFamily:'Rubik-SemiBold'}}>Login</Text> 
          </TouchableOpacity>
          </View>
      </View>
      </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Register