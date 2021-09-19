import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './components/Home' 

const MedicalReports = () => {
    const { Navigator, Screen } = createStackNavigator()

    return (
        <Navigator initialRouteName="Home" headerMode="none">
            <Screen name="Home" component={Home} />
        </Navigator>
    )
}

export default MedicalReports