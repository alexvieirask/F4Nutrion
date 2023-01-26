import { StyleSheet } from "react-native";
import { styles_global } from "@app/services/_styles_global";
import COLORS from "@app/services/_vars";

const styles = StyleSheet.create({
    ...styles_global,
    container : {
        justifyContent:"space-around",
        height:"85%"
    },

    paragraph: {
        marginTop: "5%",
        fontSize: 16,
        textAlign: "justify",
      },
    subtitle: {
        color: COLORS.ORANGE,
        fontSize: 18,
        fontWeight: "700",
        marginVertical:'5%'
      },
})

export { styles }