import { KeyboardTypeOptions } from "react-native"
import { Control } from "react-hook-form"
import { Mask } from "react-native-mask-input"

type TbasicInput = {
    onChange:  React.Dispatch<React.SetStateAction<string>> ,
    value: string
}

type TcontrolledInput = {
    control: Control<any>
    name: string,
    required?: boolean,
    label: string,
    mask?: Mask,
    placeholder?: string,
    keyboardType?: KeyboardTypeOptions,
    maxLength?: number,
    multiline?: boolean,
    autoCapitalize?: "none" | "sentences" | "words" | "characters"
}

export { TbasicInput, TcontrolledInput }