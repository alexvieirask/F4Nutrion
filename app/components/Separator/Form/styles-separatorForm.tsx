import { StyleSheet } from "react-native";
import COLORS from "@app/services/_vars";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.ORANGE,
        padding: "2%",
        marginHorizontal: "1.2%",
        marginVertical: "3%",
        borderRadius: 12
    },
    label:{
        color: COLORS.WHITE,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    }
})

export { styles }