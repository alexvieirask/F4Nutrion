import { HeaderRoute } from "@app/components/Header/Route";
import { SafeAreaView, ScrollView, View, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles-detailsNote";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { returnNoteById } from "@app/services/database/notes";
import { TNote } from "@app/services/types/note";
import { ModalFloating } from "@app/components/Modal/Floating";

interface Props{
    id:  number
}


export default function DetailsNote() : JSX.Element {
    const route = useRoute()
    const { id } = route.params as Props
    const [ note,setNote ] = useState<TNote | null>(null)

    async function handleFetchData() {
        const note = await returnNoteById(id);
        setNote(note);
      }
    
    useFocusEffect(
        useCallback(()=>{
            handleFetchData()
        },[])
    )
    
    return (  
        note!= null && (        
            <View style={{ flex:1 }}>
                <HeaderRoute title="Details" />
                <ScrollView>
                    <SafeAreaView style={styles.safeAreaView}>
                        <View>
                            <Text style={styles.date} allowFontScaling={false}>Created At {note.date}</Text>
                            <Text style={styles.titleDetails} allowFontScaling={false}>{note.title}</Text>
                        </View>
                        <View style={styles.containerContent}>
                            <Text>{note.content}</Text>
                        </View>
                    </SafeAreaView>
                </ScrollView>
                <ModalFloating itemId={note.id} label="note" />
            </View>)
        
    )
}