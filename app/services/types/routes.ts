import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type propsNavigationStack = {
    BottomTabs: undefined
    Home: undefined
    Client: undefined
    Notes: undefined
    About: undefined
    FormNote: {
        id?: number
        mode: "add" | "edit"
    }
    DetailsNote: {
        id : number
    },
    FormClient: {
        id?: number
        mode: "add" | "edit"
    }
}

type propsStack = NativeStackNavigationProp<propsNavigationStack>

export { propsNavigationStack, propsStack }