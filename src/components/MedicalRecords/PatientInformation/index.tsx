import React, { FC } from 'react'

import {
  Text,
} from './styles'

interface Props {
    title?: boolean
}

const PatientInformation: FC<Props> = ({ children, title }) => (
  <Text title={title}>
    {children}
  </Text>
)

export default PatientInformation
