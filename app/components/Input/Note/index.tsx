import { View, TextInput, Text  } from "react-native";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { TcontrolledInput } from "@app/services/types/input";
import COLORS from "@app/services/_vars";
import { styles } from "./styles-noteInput";

const NoteInput = (props : TcontrolledInput) : JSX.Element => {
    const [currentColor, setCurrentColor] = useState<string>(COLORS.LIGHT_GRAY2);
    styles.input =  {...styles.input, borderColor: currentColor}
   
    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>{props.label}</Text>
            <Controller control={props.control} name={props.name} render={({ field: { onChange, value } }) => (
                <TextInput
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