import { StyleSheet } from "react-native";
import COLORS from "@app/services/_vars";

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        height: 40,
        borderRadius: 5,
        width: "85%",
        borderColor: "#bab5b3",
        paddingLeft: "12%",
        paddingRight: "5%",
        borderWidth: 1,
      },
      icon: {
        position: "absolute", 
        top: 10, 
        left: 15
      }
  });

  export { styles }