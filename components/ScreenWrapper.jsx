import { View, Dimensions, Platform, StatusBar } from 'react-native'


const  {height} = Dimensions.get('window')
const ScreenWrapper = ({children, style}) => {
    let paddingTop = Platform.OS === 'ios' ? height * 0.06 : 0;
  return (
    <View style={[{paddingTop, flex:1}, style]}>
      {children}
    </View>
  )
}

export default ScreenWrapper