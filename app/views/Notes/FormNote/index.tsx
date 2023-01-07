import { HeaderEmpty } from "@app/components/Header/Empty";
import { SafeAreaView, View, Text } from "react-native";


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NOTE_SCHEMA } from "@app/common/_yup_schemas";
import { styles } from "./styles-formNote";

import { NoteInput } from "@app/components/Input/Note";
import { propsNote } from "@app/common/types/note";
import { ButtonBar } from "@app/components/Button/Bar";


export default function FormNote(){
    const { control,handleSubmit,formState: { errors },setValue } = useForm({ resolver: yupResolver(NOTE_SCHEMA) });

    const handleSubmitForm = (note : propsNote) => {
        console.log(note)
    }


    return(
        <View style={{ flex:1 }}>
            <HeaderEmpty/>
            <SafeAreaView style={styles.safeAreaView}>
                <Text style={styles.titleForm}>Add Note</Text>
                <NoteInput
                    control={control}
                    name="title"
                    maxLength={35}
                    label= "Title"
                    multiline={false}
                />

                <NoteInput
                    control={control}
                    name="content"
                    maxLength={300}
                    label="Content"
                    multiline={true}
                />
            </SafeAreaView>
            <ButtonBar label="Confirm" action={handleSubmit(handleSubmitForm)}/>

        </View>
    )

}