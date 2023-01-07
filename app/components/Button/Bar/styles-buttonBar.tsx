import { StyleSheet } from "react-native";
import COLORS from "@app/common/_vars";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.ORANGE,
        paddingHorizontal: "5%",
        paddingVertical: "2%",
        width:"100%",
        alignItems: "center",
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: COLORS.WHITE,
    },
});

export { styles }