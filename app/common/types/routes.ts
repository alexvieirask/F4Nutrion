import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type propsNavigationStack = {
    BottomTabs: undefined
    Home: undefined
    Client: undefined
    Notes: undefined
    About: undefined
    FormNote: undefined
}

type propsStack = NativeStackNavigationProp<propsNavigationStack>

export { propsNavigationStack, propsStack }