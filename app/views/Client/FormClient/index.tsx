import { HeaderRoute } from "@app/components/Header/Route";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles-formClient";

export default function FormClient() : JSX.Element{
    return (
        <View style={{flex:1}}>
            <HeaderRoute />
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView>
                    <View style={{padding:"5%"}}>

                        <Text>Form Client</Text>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </View>
    )
}