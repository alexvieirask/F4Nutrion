import { TDeveloper } from "@app/services/types/developer";
import { Text, View } from "react-native"
import Ionicons  from "react-native-vector-icons/Ionicons";
import { styles } from "./styles-developerItem";

interface Props{
    developer: TDeveloper

}

const DeveloperItem = ({ developer } : Props ) : JSX.Element => {
    return(
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <Ionicons name="person" size={60} color={developer.color} />
                <Text style={styles.labelName}>{developer.name}</Text>
            </View>
            <View style={styles.containerFunction}>
                <Text style={styles.labelFunction}>{developer.function}</Text>
            </View>
        </View>
    )
}

export { DeveloperItem }