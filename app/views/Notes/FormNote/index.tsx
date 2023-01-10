import { HeaderRoute } from "@app/components/Header/Route";
import { SafeAreaView, View, Text } from "react-native";


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NOTE_SCHEMA } from "@app/services/_yup_schemas";
import { styles } from "./styles-formNote";

import { NoteInput } from "@app/components/Input/Note";
import { TextError } from "@app/components/Text/Error";

import { TNote, TFormNote } from "@app/services/types/note";
import { ButtonBar } from "@app/components/Button/Bar";
import { getCurrentDate } from "@app/services/utils/date";
import { insertNote } from "@app/services/database/notes";


export default function FormNote(){
    const { control,handleSubmit,formState: { errors },setValue } = useForm<TFormNote>({ resolver: yupResolver(NOTE_SCHEMA) });

    const handleSubmitForm = (note : TFormNote) => {
        handleNewNote(note)
    }

    const handleNewNote = async (note: TFormNote) => {
        const newNote : TNote  = {...note, date: getCurrentDate()}
        await insertNote(newNote)

    }

    return(
        <View style={{ flex:1 }}>
            <HeaderRoute />
            <SafeAreaView style={styles.safeAreaView}>
                <Text style={styles.titleForm}>Add Note</Text>
                <NoteInput
                    control={control}
                    name="title"
                    maxLength={35}
                    label= "Title"
                    multiline={false}
                />
                {errors.content && <TextError message={errors.title.message} />}
                <NoteInput
                    control={control}
                    name="content"
                    maxLength={300}
                    label="Content"
                    multiline={true}
                />
                {errors.content && <TextError message={errors.content.message} />}
            </SafeAreaView>
            <ButtonBar label="Confirm" action={handleSubmit(handleSubmitForm)}/>

        </View>
    )

}