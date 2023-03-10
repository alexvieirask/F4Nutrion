import { createStackNavigator } from '@react-navigation/stack'
import { propsNavigationStack } from '@app/services/types/routes'

import BottomTabs from './bottomTabs'
import FormNote from '@app/views/Notes/FormNote'
import DetailsNote from '@app/views/Notes/DetailsNote'
import FormClient from '@app/views/Client/FormClient'

export default function Routes() : JSX.Element{
    const { Navigator, Screen } = createStackNavigator<propsNavigationStack>()
    const NO_SHOW_HEADER = {
        headerShown: false
    }

    return(
        <Navigator>
            <Screen options={NO_SHOW_HEADER} name="BottomTabs" component={BottomTabs} />
            <Screen options={NO_SHOW_HEADER} name="FormNote" component={FormNote}/>
            <Screen options={NO_SHOW_HEADER} name="DetailsNote" component={DetailsNote} />
            <Screen options={NO_SHOW_HEADER} name="FormClient" component={FormClient}/>
        </Navigator>
    )
}