import COLORS from "@app/services/_vars"
import { FloatingAction } from "react-native-floating-action"
import { actions } from "./actions"
import React, { useState } from "react"
import { ModalDelete } from "../Delete"
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "@app/services/types/routes"

interface Props{
    label: "note" | "client",
    itemId: number
}

const ModalFloating = ({ itemId, label } : Props) : JSX.Element =>{
    const navigation = useNavigation<propsStack>()
    const [ modalOpen, setModalOpen ] = useState(false)
    
    const handleOptions = (option : string) =>{
        if(label = "note"){
            option === "bt_delete" && setModalOpen(true)
            option === "bt_edit" &&  navigation.navigate("FormNote",{id: itemId, mode:"edit"})
        }
    }

    return(
        <>
            <FloatingAction color={COLORS.ORANGE} actions={actions} onPressItem={ option => handleOptions(option) } />
            <ModalDelete open={modalOpen} setOpen={setModalOpen} itemId={itemId} label={label}/>
        </>
    )

}

export { ModalFloating }