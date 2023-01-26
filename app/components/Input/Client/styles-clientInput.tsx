import { StyleSheet } from "react-native";
import COLORS from "@app/services/_vars";  

const styles = StyleSheet.create({
    container: {
        marginVertical: "2%",
        marginHorizontal: "1%",
        width:'100%'
    },
    input: {
        backgroundColor: COLORS.GRAY,
        fontSize: 16,
        borderRadius: 5,
        padding: "3%",
        borderWidth: 0,
        borderColor: "#FFFFFF",
       
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
    },
});

export { styles }