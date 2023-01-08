import { StyleProp, View, ViewStyle } from "react-native"
import { _styles } from "./styles-separatorLine"

interface Props{
    styles?: StyleProp<ViewStyle>
}

const SeparatorLine = ({ styles } : Props) : JSX.Element => {
    return <View style={ styles || _styles.line } />
}

export { SeparatorLine }