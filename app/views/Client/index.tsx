import { Text, SafeAreaView } from "react-native";
import { styles } from "./styles-client";

export default function Client(){
    return(
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.title}>Client</Text>
        </SafeAreaView>
    )
}