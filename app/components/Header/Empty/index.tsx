import { View, TouchableWithoutFeedback, SafeAreaView, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import COLORS from "@app/common/_vars";
import { styles } from "./styles-headerEmpty";

const HeaderEmpty = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                <AntDesign style={styles.arrow} name="arrowleft" size={20} color={COLORS.ORANGE}/>
            </TouchableWithoutFeedback>
        </View>
  );
}

export { HeaderEmpty }