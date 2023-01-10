import React, { useCallback, useRef, useState } from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { styles } from "./styles-notes";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Ionicons  from "react-native-vector-icons/Ionicons"
import { NothingToShow } from "@app/components/NothingToShow";
import { TNote } from "@app/services/types/note";
import COLORS from "@app/services/_vars";
import { propsStack } from "@app/services/types/routes";
import { returnAllNotes } from "@app/services/database/notes";
import { FlatListNotes } from "@app/components/FlatList/Notes";

export default function Notes() : JSX.Element{
    const [ notes, setNotes ] = useState<TNote[]>([])
    const navigation = useNavigation<propsStack>()

    const flatlistRef = useRef()
    
    const redirectToFormAddNotes = () : void => {
        navigation.navigate("FormNote", {mode:"add"})
    }

    const handleFatchData = async () : Promise<TNote[]> =>{
        const notes = await returnAllNotes()

        setNotes(notes)

        return notes
    }

    useFocusEffect(
        useCallback(()=>{
            handleFatchData()
        },[])
    )

    return(
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.rowItems}>
                <Text style={styles.title}>Notes</Text>
                <TouchableOpacity onPress={redirectToFormAddNotes}>
                    <Ionicons name="add-circle-sharp" size={40} color={COLORS.ORANGE} />
                </TouchableOpacity>
            </View>
            { 
                notes.length > 0 ? (<FlatListNotes data={notes} flatlistRef={flatlistRef} />)  : 
                                    (<NothingToShow label="notes" /> )
            }
        </SafeAreaView>
    )
}