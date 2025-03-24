import { View, Text } from 'react-native'
import { colors } from '../constants/theme'
import { verticalScale } from '../utils/styling'

const Typography = ({size, color=colors.neutral900, fontWeight='400', children, style, textProps}) => {
  const textStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  }
    return (
    <View>
      <Text style={[style, textStyle]} {...textProps}>{children}</Text>
    </View>
  )
}

export default Typography