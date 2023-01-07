import { createBottomTabNavigator, BottomTabNavigationOptions  } from '@react-navigation/bottom-tabs'
import COLORS from '@app/common/_vars'

import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo  from "react-native-vector-icons/Entypo"
import Ionicons  from "react-native-vector-icons/Ionicons"
import AntDesign  from "react-native-vector-icons/AntDesign"

import Home from '@app/views/Home'
import Notes from '@app/views/Notes'
import Client from '@app/views/Client'
import About from '@app/views/About'

export default function BottomTabs(){
    const Tab = createBottomTabNavigator()
    
    const Tab__Options :  BottomTabNavigationOptions =  {
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
    
    const Tab__LabelOptions : BottomTabNavigationOptions = {
        tabBarLabelStyle: {
            fontSize: 12,
            bottom: "11%",
    }}

    
    return(
        <Tab.Navigator backBehavior='history' screenOptions={Tab__Options}>
            <Tab.Screen name="Home" component={Home} options={{
                ...Tab__LabelOptions,
                tabBarIcon: ({ size, color }) => (
                    <Entypo name="home" size={size} color={color} />
                ),
            }}
            />

            <Tab.Screen name="Client" component={Client} options={{
                ...Tab__LabelOptions,
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="people-sharp" size={size} color={color} />
                ),
            }}
            />

            <Tab.Screen name="Notes" component={Notes} options={{
                ...Tab__LabelOptions,
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="note-text" size={size} color={color}/>
                ),
            }}
            />

            <Tab.Screen name="About" component={About} options={{
                ...Tab__LabelOptions,
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name="question" size={size} color={color} />
                ),
            }}
            />

        </Tab.Navigator>    
    )

}