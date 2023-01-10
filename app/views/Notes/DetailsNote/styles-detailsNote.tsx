import { StyleSheet } from "react-native";
import { styles_global } from "@app/services/_styles_global";

const styles = StyleSheet.create({
    ...styles_global,
    date: {
        paddingRight: "5%",
        paddingTop: "5%",
        textAlign: "right",
        fontSize: 14,
    },
    titleDetails:{
        marginLeft: "5%",
        marginRight: "5%",
        padding: "1%",
        color: "#FF6638",
        fontWeight: "300",
        fontSize: 30,
    },
    containerContent:{
        marginHorizontal: "4%",
        marginVertical: "2%",
        backgroundColor: "#F0EDED",
        borderRadius: 25,
        padding: "4%",
        borderBottomLeftRadius: 4,
        borderTopRightRadius: 4,
        minHeight: "50%"
    }

})

export { styles }