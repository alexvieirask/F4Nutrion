import { createStackNavigator } from '@react-navigation/stack'
import { propsNavigationStack } from '@app/services/types/routes'

import BottomTabs from './bottomTabs'
import FormNote from '@app/views/Notes/FormNote'

export default function Routes(){
    const { Navigator, Screen } = createStackNavigator<propsNavigationStack>()
    const NO_SHOW_HEADER = {
        headerShown: false
    }

    return(
        <Navigator>
            <Screen options={NO_SHOW_HEADER} name="BottomTabs" component={BottomTabs} />
            <Screen options={NO_SHOW_HEADER} name="FormNote" component={FormNote}/>
        </Navigator>
    )
}