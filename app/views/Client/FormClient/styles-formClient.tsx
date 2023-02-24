import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaView:{
        marginTop: '5%',
        marginHorizontal:'5%',
        marginBottom:'5%',
        flex:1
    },
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