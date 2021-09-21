import React, {
  FC, useContext, useEffect, useState,
} from 'react'
import { useNavigation } from '@react-navigation/native'
// import { useAsyncStorage } from '@react-native-async-storage/async-storage'

import Button from '../../../../components/Button'
import MedicalRecords from '../../../../components/MedicalRecords'
import { MedicalRecordsContext } from '../../../../contexts/MedicalRecordsContext'
import useAssinaProntuarioService from '../../../../hooks/useAssinaProntuarioService'

import {
  Container,
  TitleNoMedicalRecords,
  AddMedicalRecordsButton,
} from './styles'

const Home: FC = () => {
  const { navigate } = useNavigation()
  const { storage } = useContext(MedicalRecordsContext)
  const { getServiceStatus } = useAssinaProntuarioService()
  const [serviceStatus, setServiceStatus] = useState({})
  // const { removeItem } = useAsyncStorage('@MedicalRecords')

  const getStatus = async () => {
    const { data, status } = await getServiceStatus()
    setServiceStatus(status === 200 && data?.ok)
  }

  useEffect(async () => {
    // removeItem()
    // getStatus()
    console.log(serviceStatus)
  }, [])

  return (
    <Container showsVerticalScrollIndicator={false}>
      {
        (serviceStatus && storage.length === 0) ? (
          <TitleNoMedicalRecords>Nenhum prontuário cadastrado.</TitleNoMedicalRecords>
        )
          : <MedicalRecords item={storage} />
      }
      {
         serviceStatus && (
         <Button
           text="Adicionar novo prontuário"
           asButton={AddMedicalRecordsButton}
           onPress={() => navigate('RegisterMedicalRecord')}
         />
         )
      }

    </Container>
  )
}

export default Home
