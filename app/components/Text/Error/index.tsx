import { Text } from "react-native"
import { styles } from "./styles-error"

interface Props{
    message: string
}

const TextError = ({ message } : Props) : JSX.Element =>  {
    return <Text style={styles.label}>{message}</Text>;
}

export { TextError }