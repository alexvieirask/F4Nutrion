import { View, Text } from "react-native";
import { TcontrolledInput } from "@app/services/types/input";
import { Controller } from "react-hook-form";
import { useState } from "react";
import { styles } from "./styles-clientInput"
import MaskInput from "react-native-mask-input";
import COLORS from "@app/services/_vars";

const ClientInput = (props : TcontrolledInput)  : JSX.Element => {
    const [currentColor, setCurrentColor] = useState<string>(COLORS.LIGHT_GRAY2);
    styles.input =  {...styles.input, borderColor: currentColor}
  
    return(
        <View style={styles.container}>
            <Text style={styles.label}> {props.required ? `${props.label} *` : props.label}</Text>
            <Controller
                control={props.control}
                name={props.name}
                render={({ field: { onChange, value } }) => (
                    <MaskInput
                        {...props}
                        onFocus= {() => setCurrentColor(COLORS.ORANGE)}
                        onBlur=  {() => setCurrentColor(COLORS.LIGHT_GRAY2)}
                        style={styles.input}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
        </View>
    )

}

export { ClientInput }