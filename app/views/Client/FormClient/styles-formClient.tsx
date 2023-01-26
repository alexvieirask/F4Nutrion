import { StyleSheet } from "react-native";
import { styles_global } from "@app/services/_styles_global";

const styles = StyleSheet.create({
    ...styles_global,
    titleForm:{
        color: "#ff6638",
        fontSize: 30,
        fontWeight: "bold",
    },
    twoColumns:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:'1%' 
    }

})

export { styles }