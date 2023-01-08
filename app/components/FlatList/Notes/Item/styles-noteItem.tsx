import { StyleSheet } from "react-native";
import COLORS from "@app/services/_vars";

const styles = StyleSheet.create({
    container: {
        borderLeftColor: COLORS.ORANGE,
        marginBottom: "3%",
        paddingHorizontal: "3%",
        paddingVertical: "3.4%",
        borderRadius: 6,
        borderLeftWidth: 3,
        backgroundColor: "white",
    },
    title: {
        color: "#21140a",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: "1%",
        paddingHorizontal: "3%",
    },
    date: {
        color: "#333",
        fontSize: 14,
        paddingTop: 10,
        textAlign: "right",
    }
  });

  export { styles }