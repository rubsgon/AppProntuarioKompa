import React, { FC, useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import { useAsyncStorage } from '@react-native-async-storage/async-storage'

import Button from '../../../../components/Button'
import MedicalRecords from '../../../../components/MedicalRecords'
import { MedicalRecordsContext } from '../../../../contexts/MedicalRecordsContext'

import {
  Container,
  TitleNoMedicalRecords,
  AddMedicalRecordsButton,
} from './styles'

const Home: FC = () => {
  const { navigate } = useNavigation()
  const { storage } = useContext(MedicalRecordsContext)
  // const { removeItem } = useAsyncStorage('@MedicalRecords')

  useEffect(() => {
    // removeItem()
    console.log('storage', storage)
  }, [])

  return (
    <Container showsVerticalScrollIndicator={false}>
      {
        storage.length === 0 && (
          <TitleNoMedicalRecords>Nenhum prontuário cadastrado.</TitleNoMedicalRecords>
        )
      }
      <MedicalRecords item={storage} />
      <Button
        text="Adicionar novo prontuário"
        asButton={AddMedicalRecordsButton}
        onPress={() => navigate('RegisterMedicalRecord')}
      />
    </Container>
  )
}

export default Home
