import { createStackNavigator } from '@react-navigation/stack'
import BottomTabs from './bottomTabs'

export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false }} name='BottomTabs' component={BottomTabs} />
        </Stack.Navigator>
    )
}