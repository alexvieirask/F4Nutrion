import { TouchableOpacity, GestureResponderEvent } from "react-native";
import { styles } from "./styles-buttonSquare"
import COLORS from "@app/services/_vars"
import Entypo  from "react-native-vector-icons/Entypo"; 

type propsButton = {
    onPress: (event: GestureResponderEvent) => void
}

const ButtonSquare = ({ onPress } : propsButton) : JSX.Element => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Entypo name="plus" size={30} color={COLORS.WHITE}  />
        </TouchableOpacity>
    )
}

export { ButtonSquare }