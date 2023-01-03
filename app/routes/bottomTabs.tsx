import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import COLORS from '@app/common/_vars'
import Home from '@app/views/Home'
import Notes from '@app/views/Notes'

export default function BottomTabs(){
    const Tab = createBottomTabNavigator()
    const Tab__Options : object = {
        tabBarInactiveBackgroundColor: COLORS.ORANGE_MID,
        tabBarActiveTintColor: COLORS.ORANGE_STRONG,
        tabBarInactiveTintColor: COLORS.WHITE,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          height: 50,
        },
    }
    const Tab__Label : object = {
        tabBarLabelStyle: {
            fontSize: 12,
            bottom: "11%",
}}
    
    return(
        <Tab.Navigator backBehavior='history' screenOptions={Tab__Options}>
            <Tab.Screen name='Home' component={Home} options={Tab__Label} />
            <Tab.Screen name='Notes' component={Notes} options={Tab__Label} />
        </Tab.Navigator>    
    )

}