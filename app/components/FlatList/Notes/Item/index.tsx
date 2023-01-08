import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles-noteItem"
import { TNote } from "@app/services/types/note"

interface Props{
    note: TNote
}

const NoteItem = ({ note } : Props) : JSX.Element => {
    console.log(note)
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.date}>{note.date}</Text>
        </TouchableOpacity>
    )
}

export { NoteItem }