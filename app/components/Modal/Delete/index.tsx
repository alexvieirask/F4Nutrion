import { SeparatorLine } from "@app/components/Separator/Line"
import COLORS from "@app/services/_vars"
import React from "react"
import { Modal, TouchableOpacity, View, Text } from "react-native"
import  AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from "./styles-modalDelete"
import { deleteNoteById } from "@app/services/database/notes"
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "@app/services/types/routes"

interface Props{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    label: "note" | "client",
    itemId: number
}

const ModalDelete = ({ open, setOpen, label, itemId } : Props) =>{
    const navigation = useNavigation<propsStack>()

    const handleCloseModal = () =>{
        setOpen(false)
    }

    const handleDeleteItem = async () =>{
        label === "note" && await deleteNoteById(itemId)

        handleCloseModal()
        
        navigation.navigate("BottomTabs")
         
    }

    return(
        <Modal visible={open} transparent={true} animationType="fade" >
            <View style={styles.outerview}>
                <View style={styles.container}>
                    <View style={styles.headerTop}>
                        <TouchableOpacity onPress={handleCloseModal}>
                            <AntDesign name="close" size={25} color={COLORS.ORANGE} />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.headerTitle}>Confirmation</Text>
                        </View>
                    </View>
                    <SeparatorLine/>
                    <View style={styles.containerMessage}>
                        <Text>Deleted data cannot be recovered.This will permanently remove this {label}.</Text>
                    </View>
                    <SeparatorLine/>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.buttonDelete} onPress={handleDeleteItem}>
                            <Text style={{color:"#FFF"}}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCancel} onPress={handleCloseModal}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )

}

export { ModalDelete }