import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Keyboard, ActivityIndicator } from "react-native";
import { HeaderRoute } from "@app/components/Header/Route";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NOTE_SCHEMA } from "@app/services/_yup_schemas";
import { styles } from "./styles-formNote";
import { NoteInput } from "@app/components/Input/Note";
import { TextError } from "@app/components/Text/Error";
import { TNote, TFormNote } from "@app/services/types/note";
import { ButtonBar } from "@app/components/Button/Bar";
import { getCurrentDate } from "@app/services/utils/date";
import { insertNote, returnNoteById, updateNote } from "@app/services/database/notes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from "@app/services/types/routes";
import COLORS from "@app/services/_vars";

interface Props{
    mode: "add" | "edit",
    id: number
}

export default function FormNote() : JSX.Element{
    const navigation = useNavigation<propsStack>()
    const route = useRoute()
    const { mode, id } = route.params as Props
    const formatMode = `${mode[0].toUpperCase()}${mode.substring(1,mode.length)}`
    const [ loading, setLoading ] = useState(true)

    const { control,handleSubmit,formState: { errors },setValue } = useForm<TFormNote>({ resolver: yupResolver(NOTE_SCHEMA) });

    const handleSubmitForm = (note : TNote) : void => {
        mode === "add" && handleNewNote(note)
        mode === "edit" && handleEditNote(note)
    }

    const handleNewNote = async (note: TFormNote) : Promise<void> => {
        const newNote : TNote  = {...note, date: getCurrentDate()}
        await insertNote(newNote)
        handleClose()
    }

    const handleSetCurrentNote = async () : Promise<void> => {
        const note : TNote = await returnNoteById(id)
        const { title, content } = note 
        
        setValue("title", title)
        setValue("content", content)

        setLoading(false)
    }

    const handleEditNote = async (noteForm: TFormNote) : Promise<void> => {
        const note : TNote = {...noteForm,id:id}

        await  updateNote(note)
        handleClose()
    }

    const handleClose = () : void => {
        Keyboard.dismiss()
        navigation.goBack()
    }

    useEffect(()=>{
        mode === "edit" && handleSetCurrentNote()
    },[])

   
    return(
        <View style={{ flex:1 }}>
            <HeaderRoute />
            {mode === "edit" && loading ?(
                <ActivityIndicator style={{ flex: 1 }} color={COLORS.ORANGE}/>
            ):
                <>
                    <SafeAreaView style={styles.safeAreaView}>
                        <Text style={styles.titleForm}>{formatMode} Note</Text>
                        <NoteInput
                            control={control}
                            name="title"
                            maxLength={35}
                            label= "Title"
                            multiline={false}
                        />
                        {errors.title && <TextError message={errors.title.message} />}
                        <NoteInput
                            control={control}
                            name="content"
                            maxLength={500}
                            label="Content"
                            multiline={true}
                        />
                        {errors.content && <TextError message={errors.content.message} />}
                    </SafeAreaView>
                    <ButtonBar label="Confirm" action={handleSubmit(handleSubmitForm)}/>
                </>
            }
        </View>
    )

}