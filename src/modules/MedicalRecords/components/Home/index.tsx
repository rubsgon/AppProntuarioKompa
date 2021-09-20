import React, { FC } from 'react'
import Button from '../../../../components/Button'

import { Container, TitleNoMedicalRecords, AddMedicalRecordsButton } from './styles'

const Home: FC = () => (
  <Container>
    <TitleNoMedicalRecords>Nenhum prontuário cadastrado.</TitleNoMedicalRecords>
    <Button text="Adicionar novo prontuário" asButton={AddMedicalRecordsButton} />
  </Container>

)

export default Home
