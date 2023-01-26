import { Text, SafeAreaView, View } from "react-native";
import { styles } from "./styles-client";
import { SearchInput } from "@app/components/Input/Search";
import { useCallback, useState } from "react";
import { Tclient } from "@app/services/types/client";
import { ButtonSquare } from "@app/components/Button/Square";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { propsStack } from "@app/services/types/routes";
import { NothingToShow } from "@app/components/NothingToShow";
import { returnAllClients } from "@app/services/database/clients";

export default function Client() : JSX.Element{
    const [ search, setSearch ] = useState<string>("")
    const [ clients, setClients ] = useState<Tclient[]>([])

    const navigation = useNavigation<propsStack>()

    const redirectToFormAddClient = () : void => {
        navigation.navigate("FormClient", {mode:"add"})
    }

    const handleFatchData = async () : Promise<Tclient[]> =>{
        const clients = await returnAllClients()

        setClients(clients)

        return clients
    }

    useFocusEffect(
        useCallback(()=>{
            handleFatchData()
        },[])
    )

    return(
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.inputRow}>
                <SearchInput value={search} onChange={setSearch} />
                <ButtonSquare onPress={redirectToFormAddClient}/> 
            </View>
            {clients.length > 0 ? <Text>Tem cliente</Text> : <NothingToShow label="clients"/> }
        </SafeAreaView>
    )
}