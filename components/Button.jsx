import { TouchableOpacity, ActivityIndicator, Text } from 'react-native'

const Button = ({style, color='white', onPress, loading=false, children}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[{borderRadius:26, borderCurve:'continuous'},style]} onPress={onPress}>
        {loading ? 
        <ActivityIndicator/> 
        : 
        <Text style={{fontSize:20, textAlign:'center', paddingVertical:14, color:color}}>{children}</Text> }
    </TouchableOpacity>
  )
}

export default Button