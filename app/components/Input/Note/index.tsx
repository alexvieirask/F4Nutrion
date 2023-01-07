import { View, TextInput, Text  } from "react-native";
import { useState } from "react";
import { Controller } from "react-hook-form";

import COLORS from "@app/common/_vars";
import { styles } from "./styles-noteInput";

const NoteInput = (props : any) => {
    const [currentColor, setCurrentColor] = useState<string>(COLORS.LIGHT_GRAY2);
    styles.input =  {...styles.input, borderColor: currentColor}
   
    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>{props.label}</Text>
            <Controller control={props.control} name={props.name} render={({ field: { onChange, value } }) => (
                <TextInput
                    {...props}
                    allowFontScaling={false}
                    onFocus= {() => setCurrentColor(COLORS.ORANGE)}
                    onBlur=  {() => setCurrentColor(COLORS.LIGHT_GRAY2)}
                    value={value}
                    style={styles.input}
                    textAlignVertical={"center"}
                    onChangeText={onChange}
                />
             )}
            />
        </View>
    );
}

export { NoteInput }