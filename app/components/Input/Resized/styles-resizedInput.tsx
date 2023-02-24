import COLORS from "@app/services/_vars";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        backgroundColor: COLORS.GRAY,
        fontSize: 16,
        minHeight: 40,
        borderRadius: 5,
        padding: "3%",
        paddingHorizontal:"3%"
  
  },
    container: {
        marginVertical: "2%",
        marginHorizontal: "1%",
  },
    label: {
        fontWeight: "bold",
        fontSize: 16,
  },
});

export { styles }