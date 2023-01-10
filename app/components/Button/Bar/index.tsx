import { Text, TouchableHighlight, View, GestureResponderEvent } from "react-native";
import { styles } from "./styles-buttonBar";

type propsButton = {
    label:  "Confirm" | undefined
    action: (event: GestureResponderEvent) => void

}

const ButtonBar = ({ label, action  } : propsButton) : JSX.Element => {
    return(
    <TouchableHighlight onPress={action}>
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
        </View>
    </TouchableHighlight>
        
    )

}

export { ButtonBar }