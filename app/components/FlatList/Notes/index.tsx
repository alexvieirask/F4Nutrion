import React from "react"
import { FlatList } from "react-native"
import { styles } from "./styles-flatlistNotes"
import { TNote } from "@app/services/types/note"
import { NoteItem } from "./Item"

interface Props{
    data: TNote[],
    ref: React.LegacyRef<FlatList<any>>
}

const FlatListNotes = ({ data, ref } : Props) : JSX.Element =>  {
    return(
        <>
            <FlatList
                data={data}
                style={styles.container}
                ref= {ref}
                keyExtractor= { (note) => note.id.toString() }
                showsHorizontalScrollIndicator = {false}
                renderItem={({ item: note }) => <NoteItem note={note} />}
            />
        </>
    )
}

export { FlatListNotes }