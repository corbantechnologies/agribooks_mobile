import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/theme'
import BackButton from '../../components/BackButton'
import Typography from '../../components/Typography'
import FormField from '../../components/FormField'
import Button from '../../components/Button'
import { useRouter } from 'expo-router'
import { useSystem } from '@/powersync/Powersync'

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
      })
      const { supabaseConnector } = useSystem();
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const router = useRouter()
      const submit = async () =>{
        setLoading(true);
        setError('');
        try {
          await supabaseConnector.login(form.email, form.password);
          router.replace('/(tabs)');
        } catch (ex) {
          console.error(ex);
          setError(ex.message || 'Could not authenticate');
        } finally {
          setLoading(false);
        }
      }
  return (
    <SafeAreaView style={{flex:1,padding:20, backgroundColor:colors.primaryBlue}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <BackButton/>
      <Image source={require('../../assets/images/favicon.png')} style={{ width:60, height:50, alignSelf:'center'}} resizeMode='contain'/>
        </View>
      <View style={{flex:1, gap:20, marginTop:50}}>
      <View>
        <Typography size={42} style={{fontFamily:'Rubik-Bold', textAlign:'center'}}>Welcome Back</Typography>
        <Typography size={20} style={{ fontFamily:'Rubik-Regular', textAlign:'center'}}>Login to your account</Typography>
      </View>
      <View>
      <FormField
          title="Email"
          value={form.email}
          handleChangeText={(value)=>setForm({...form, email:value})}
          keyboardType="email-address"
          placeholder='Your email'
          />
          <FormField
          title="Password"
          value={form.password}
          handleChangeText={(value)=>setForm({...form, password:value})}
          placeholder='******'
          />
          <Typography size={16} color='#505050' style={{fontFamily:'Rubik-Regular', textAlign:'right'}}>Forgot Password?</Typography>
          {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
          <Button onPress={submit} loading={loading} style={{backgroundColor:colors.primaryGreen, marginVertical:16}}>Login</Button>
          <Typography size={16} color='#505050' style={{fontFamily:'Rubik-Regular', textAlign:'center'}}>Or sign in with</Typography>
          <TouchableOpacity activeOpacity={0.5} style={{width:'auto', borderWidth:0.5, marginBottom:16, borderColor:'#bcbcbc', borderRadius:50, marginTop:8, paddingBlock:10 }}>
            <View style={{display:'flex', flexDirection:'row', gap:8, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../../assets/icons/google.png')} style={{width:24, height:24}} resizeMode='contain'/>
            <Text style={{fontSize:18, fontFamily:'Rubik-Medium'}}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:2}}>
          <Typography size={16} color='#505050' style={{fontFamily:'Rubik-Regular', textAlign:'center'}}>Don't have an account? </Typography>
          <TouchableOpacity onPress={()=>router.navigate('/register')}> 
            <Text style={{color:colors.primaryGreen, fontSize:16, fontFamily:'Rubik-SemiBold'}}>Create account</Text> 
          </TouchableOpacity>
          </View>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login