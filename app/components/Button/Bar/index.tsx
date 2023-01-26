import { Text, TouchableHighlight, View, GestureResponderEvent } from "react-native";
import { styles } from "./styles-buttonBar";

type propsButton = {
    label:  "Confirm" | undefined
    onPress: (event: GestureResponderEvent) => void

}

const ButtonBar = ({ label, onPress  } : propsButton) : JSX.Element => {
    return(
    <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
        </View>
    </TouchableHighlight>
        
    )

}

export { ButtonBar }