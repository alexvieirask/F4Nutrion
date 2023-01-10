import React from "react"
import { FlatList } from "react-native"
import { styles } from "./styles-flatlistNotes"
import { TNote } from "@app/services/types/note"
import { NoteItem } from "./Item"

interface Props{
    data: TNote[],
    flatlistRef: React.LegacyRef<FlatList<any>>
}

const FlatListNotes = ({ data, flatlistRef } : Props) : JSX.Element =>  {
    return(
        <>
            <FlatList
                data={data}
                style={styles.container}
                ref= {flatlistRef}
                keyExtractor= { (note) => note.id.toString() }
                showsVerticalScrollIndicator = {false}
                renderItem={({ item: note }) => <NoteItem note={note} />}
            />
        </>
    )
}

export { FlatListNotes }