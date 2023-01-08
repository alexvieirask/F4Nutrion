import { StyleSheet } from "react-native";
import { styles_global } from "@app/services/_styles_global";

const styles = StyleSheet.create({
    ...styles_global,
    rowItems:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "5%",
    }
})

export { styles }