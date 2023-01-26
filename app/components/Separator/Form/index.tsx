import { View, Text } from "react-native"
import { styles } from "./styles-separatorForm"

type Props = {
    label : string
}

const SeparatorForm = ({ label } : Props) : JSX.Element => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label.toUpperCase()}</Text>
        </View>
    )
}

export { SeparatorForm }