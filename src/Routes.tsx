import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MedicalRecords from './modules/MedicalRecords'

const Routes: FC = () => (
  <NavigationContainer>
    <MedicalRecords />
  </NavigationContainer>
)

export default Routes
