import RadioButtonRN from "radio-buttons-react-native";
import { Controller } from "react-hook-form";
import { Text } from "react-native";
import COLORS from "@app/services/_vars";
import { styles } from "./styles-radioInput"

const InputRadio = (props : any) => {
    return (
        <>
            <Text style={styles.label}>{props.label}</Text>
            <Controller 
                control={props.control}
                name={props.name}
                render={({ field: { onChange } }) => (
                    <RadioButtonRN
                      data={props.data}
                      selectedBtn={onChange}
                      initial={props.initial}
                      activeColor={COLORS.ORANGE}              
                      boxActiveBgColor={COLORS.WHITE}
                      animationTypes={["shake"]}
                    />
                )}
            
            />
        </>
    )
}

export { InputRadio }