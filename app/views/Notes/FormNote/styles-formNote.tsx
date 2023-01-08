import { StyleSheet } from "react-native";
import { styles_global } from "@app/services/_styles_global";

const styles = StyleSheet.create({
    ...styles_global,

    titleForm: {
        padding: "1%",
        color: "#FF6638",
        fontWeight: "300",
        fontSize: 30,
    }
})

export { styles }