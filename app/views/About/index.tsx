import { Text, SafeAreaView } from "react-native";
import { styles } from "./styles-about";

export default function About(){
    return(
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.title}>About</Text>
        </SafeAreaView>
    )
}