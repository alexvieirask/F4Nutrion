import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles-noteItem"
import { TNote } from "@app/services/types/note"
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "@app/services/types/routes"

interface Props{
    note: TNote
}

const NoteItem = ({ note } : Props) : JSX.Element => {
    const navigation = useNavigation<propsStack>()    
    return(
        <TouchableOpacity onPress={()=> navigation.navigate("DetailsNote",{ id: note.id })} style={styles.container}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.date}>{note.date}</Text>
        </TouchableOpacity>
    )
}

export { NoteItem }