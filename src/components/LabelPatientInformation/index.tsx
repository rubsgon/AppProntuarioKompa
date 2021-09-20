import React, { FC } from 'react'

import {
  TextPatientInformation,
} from './styles'

interface Props {
    children: string
}

const LabelPatientInformation: FC<Props> = ({ children }) => (
  <TextPatientInformation>
    {children}
  </TextPatientInformation>
)

export default LabelPatientInformation
