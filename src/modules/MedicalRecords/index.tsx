import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './components/Home'
import RegisterMedicalRecord from './components/RegisterMedicalRecord'

const MedicalReports = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="RegisterMedicalRecord" component={RegisterMedicalRecord} />
    </Navigator>
  )
}

export default MedicalReports
