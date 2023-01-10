import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    outerview:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container:{
        borderRadius: 15,
        backgroundColor: "#FFF",
        marginHorizontal: "5%",
        elevation: 10,
    },
    headerTop:{
        justifyContent:"space-between",
        flexDirection: "row-reverse",
        alignItems: "center",
        padding: "5%",
    },
    headerTitle:{
        fontWeight: "500",
        fontSize: 18,
    },
    containerMessage:{
        marginVertical: "2%",
        padding: 15,
    },
    containerButton:{
        alignItems: "flex-end",
        paddingVertical: "8%",
        paddingHorizontal: "3%",
        flexDirection: "row-reverse",
        margin:"2%"
    },
    buttonDelete:{
        backgroundColor: "#ff6638",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonCancel:{
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: "center",
    }
})

export { styles }