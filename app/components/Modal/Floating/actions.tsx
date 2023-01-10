import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const actions = [
    {
        text: "Delete",
        icon: (
            <MaterialCommunityIcons
                style={{ backgroundColor: "#ff6638", borderRadius: 29, padding: 1 }}
                name="delete"
                size={38}
                color="#FFF"
            />
        ),
        name: "bt_delete",
        position: 2
    },
    {
        text: "Edit",
        icon: (
            <AntDesign
                style={{ backgroundColor: "#ff6638", borderRadius: 29 }}
                name="edit"
                size={40}
                color="#FFF"
            />
        ),
        name: "bt_edit",
        position: 1
    }
]

export { actions }