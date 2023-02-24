import { Controller } from "react-hook-form"
import { Text, TextInput, View } from "react-native"
import { styles } from "./styles-resizedInput"

const ResizedInput = (props : any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <Controller
                control={props.control}
                name={props.name}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        value={value}
                        style={styles.input}
                        onChangeText={onChange}
                        multiline={true}
                        textAlignVertical={"center"}
                        placeholder={props.placeholder}
                    />
                )}
            />
        </View>
    )
}

export { ResizedInput }