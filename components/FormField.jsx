import { Eye, EyeSlash } from 'phosphor-react-native';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import Typography from './Typography';
import { colors } from '../constants/theme';

const FormField = ({title, value, placeholder, handleChangeText}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{marginBottom:16}}>
      <Typography size={20} style={{ fontFamily:'Rubik-SemiBold'}}>{title}</Typography>
      <View 
        style={styles.inputField}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <TextInput 
            style={{color:colors.primaryGreen, }} 
            value={value} 
            placeholder={placeholder} 
            onChangeText={handleChangeText} 
            secureTextEntry={title==='Password' && !showPassword}
        />
        {title === 'Password' && 
       ( <TouchableOpacity onPress={()=>setShowPassword(!showPassword)} style={{position:'absolute', right:16}}>
            {!showPassword ? <Eye size={24} color='black'/> : <EyeSlash size={24} color='black'/>}
        </TouchableOpacity>)
        }
      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
    inputField:{
        width: '100%',
        height:50,
        borderWidth: 0.2,
        borderColor: colors.primaryGreen,
        marginTop: 4,
        borderRadius: 24,
        justifyContent:'center',
        backgroundColor:colors.primaryLightGreen,
        paddingHorizontal:16
    }
})