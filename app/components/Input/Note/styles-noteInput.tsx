import { StyleSheet } from "react-native";
import COLORS from "@app/services/_vars";

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        height: 50,
        textAlign: "justify",
        borderRadius: 5,
        borderColor: COLORS.LIGHT_GRAY2,
        padding: "3%",
        borderWidth: 1,
    },
    containerInput: {
        marginVertical: "2%",
        maxHeight: 140,
    },
    label: {
        fontSize: 16,
        color: COLORS.GRAY_MID2,
    },
  });

  export { styles }