import { StyleSheet, Dimensions } from "react-native";
import COLORS from "@app/services/_vars";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        width: width * 0.8 - 20,
        height: width / 2.4,
        borderRadius: 12,
        justifyContent: "flex-end",
    },
    containerFunction: {
        backgroundColor: COLORS.ORANGE,
        height: "30%",
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: "5%",
        paddingTop: "5%",
    },
    containerIcon: {
        alignItems: "center",
        marginHorizontal: "20%",
        marginBottom: "5%",
      },
    labelName: {
        fontSize: 16,
        fontWeight: "500",
      },
    labelFunction: {
        fontSize: 16,
        fontWeight: "500",
        color: "#FFF",
      }
})

export { styles }