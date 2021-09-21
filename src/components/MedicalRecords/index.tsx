import React, { FC } from 'react'

import Date from './Date'
import Hour from './Hour'
import Title from './Title'
import BoxPatientInformation from './ContainerMedicalRecord'

import { Container, ContainerMedicalRecord } from './styles'

interface Props {
  item: object[]
}

const MedicalRecords: FC<Props> = ({ item }) => item.map((i) => (
  <Container>
    <Date item={i} />
    <ContainerMedicalRecord>
      <Hour item={i} />
      <Title>Anamnese</Title>
      <BoxPatientInformation title="Queixa Principal" value={i?.queixa?.label} />
      <BoxPatientInformation title="Doenças Adulto" value={i?.doencas} disease />
      <BoxPatientInformation title="Histórico da moléstia" value={i?.historico} />
    </ContainerMedicalRecord>
  </Container>
))

export default MedicalRecords
