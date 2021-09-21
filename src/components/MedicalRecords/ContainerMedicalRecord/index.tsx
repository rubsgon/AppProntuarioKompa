import React, { FC } from 'react'

import PatientInformation from '../PatientInformation'
import SelectedDisease from '../SelectedDisease'

import {
  Container,
} from './styles'

interface Props {
  title: string,
  value: any,
  disease?: boolean
 }

const ContainerPatientInformation: FC<Props> = ({ title, value, disease = false }) => ((value && value?.length > 0) ? (
  <Container>
    <PatientInformation title>{title}</PatientInformation>
    {
       disease ? <SelectedDisease data={value} />
         : <PatientInformation>{value}</PatientInformation>
     }
  </Container>
) : null)

export default ContainerPatientInformation
