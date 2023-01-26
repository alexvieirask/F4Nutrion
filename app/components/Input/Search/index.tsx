import { useState } from "react";
import { TextInput } from "react-native"
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles-searchInput"
import COLORS from "@app/services/_vars";
import { TbasicInput } from "@app/services/types/input";

const SearchInput = ({value , onChange} : TbasicInput) : JSX.Element  =>  {
    const [currentColor, setCurrentColor] = useState<string>(COLORS.LIGHT_GRAY2);
    styles.input =  {...styles.input, borderColor: currentColor}

    return(
        <>
            <TextInput 
                style={styles.input} 
                allowFontScaling={false}
                onFocus= {() => setCurrentColor(COLORS.ORANGE)}
                onBlur=  {() => setCurrentColor(COLORS.LIGHT_GRAY2)}
                value={value}
                textAlignVertical={"center"}
                onChangeText={value => onChange(value)} />
            <AntDesign style={styles.icon} name="search1" size={20} color={currentColor}/> 
        </>
    )

}

export { SearchInput }