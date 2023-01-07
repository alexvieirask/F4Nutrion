import { useState } from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { styles } from "./styles-notes";

import { propsStack } from "@app/common/types/routes";

import { useNavigation } from "@react-navigation/native";

import Ionicons  from "react-native-vector-icons/Ionicons"
import COLORS from "@app/common/_vars";

import { NothingToShow } from "@app/components/NothingToShow";
import { Inote } from "@app/common/types/note";



export default function Notes(){
    const [ notes, setNotes ] = useState<Inote[]>([])

    const navigation = useNavigation<propsStack>()

    const redirectToFormAddNotes = () : void => {
        navigation.navigate("FormNote")
    }



    return(
        <SafeAreaView style={{...styles.safeAreaView, flex:1}}>
            <View style={styles.rowItems}>
                <Text style={styles.title}>Notes</Text>
                <TouchableOpacity onPress={redirectToFormAddNotes}>
                    <Ionicons name="add-circle-sharp" size={40} color={COLORS.ORANGE} />
                </TouchableOpacity>
            </View>

            { notes.length > 0 ? <Text>Tem algo</Text> : <NothingToShow label="notes" /> }


        </SafeAreaView>
    )
}