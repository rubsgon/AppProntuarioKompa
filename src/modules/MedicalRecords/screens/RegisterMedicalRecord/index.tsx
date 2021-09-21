import React, {
  FC, useRef, useState, useContext, useEffect,
} from 'react'
import { Alert } from 'react-native'
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'
import { useNavigation, useRoute } from '@react-navigation/native'

import Picker from '../../../../components/Form/Picker'
import Button from '../../../../components/Button'
import Input from '../../../../components/Form/Input'
import PatientInformation from '../../../../components/MedicalRecords/PatientInformation'
import SelectedDisease from '../../../../components/MedicalRecords/SelectedDisease'
import Title from '../../../../components/MedicalRecords/Title'
import useFormValidation from '../../../../hooks/useFormValidation'
import { MedicalRecordsContext } from '../../../../contexts/MedicalRecordsContext'
import useAssinaProntuarioService from '../../../../hooks/useAssinaProntuarioService'
import BoxPatientInformation from '../../../../components/MedicalRecords/ContainerMedicalRecord'

import {
  Container,
  ContainerPatientInformation,
  AddMedicalRecordButton,
} from './styles'

interface FormData {
    queixa: string
}

const RegisterMedicalRecord: FC = () => {
  const [disease, setDisease] = useState([])
  const [complaint, setComplaint] = useState([])
  const [selectedDisease, setSelectedDisease] = useState([])
  const formRef = useRef<FormHandles>()
  const { validate } = useFormValidation(formRef)
  const { setMedicalRecords } = useContext(MedicalRecordsContext)
  const { navigate } = useNavigation()
  const { getComplaint, getDisease, setMedicalRecord } = useAssinaProntuarioService()

  const formatPickerData = (data: object[]) => data.map((i) => ({ label: i.label, value: i.id }))

  const getData = async () => {
    const respComplaint = await getComplaint()
    const respDisease = await getDisease()

    if (respComplaint.status === 200 && respComplaint.data.ok) setComplaint(formatPickerData(respComplaint.data.data))
    if (respDisease.status === 200 && respDisease.data.ok) setDisease(formatPickerData(respDisease.data.data))
  }

  useEffect(() => {
    getData()
  }, [])

  const schema = Yup.object().shape({
    queixa: Yup.object()
      .nullable()
      .required('Campo obrigatório!'),
    historico: Yup.string()
      .min(10, 'Quantidade mínima de caracteres exigida (10)!')
      .max(100, 'Quantidade máxima de caracteres atingida (100)!')
      .required('Campo obrigatório!'),
  })

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    const hasValidate = await validate(data, schema)

    const dataWithDate = {
      ...data,
      createdAt: new Date(),
    }

    const newDisease = data.doencas.map((i) => (i.value))

    const dataToService = {
      ...data,
      queixa: data.queixa.value,
      doencas: newDisease,
    }

    const { status } = await setMedicalRecord(dataToService)

    if (hasValidate && status === 200) {
      setMedicalRecords(dataWithDate)
      Alert.alert(':)', 'Seu prontuário foi cadastrado com sucesso!', [{ text: 'Finalizar', onPress: () => navigate('Home') }], { cancelable: false })
    } else {
      Alert.alert(':(', 'Ops, aconteceu um erro!')
    }
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <Title>
          Anamnese
        </Title>
        <ContainerPatientInformation>
          <Picker
            name="queixa"
            items={complaint}
            label="Queixa Principal"
          />
        </ContainerPatientInformation>
        {
            selectedDisease.length !== 0
            && (
            <ContainerPatientInformation>
              <PatientInformation title>Selecionados:</PatientInformation>
              <SelectedDisease
                data={selectedDisease}
                onClose={(item) => formRef.current?.setFieldValue('doencas', selectedDisease.filter((i) => i !== item))}
              />
            </ContainerPatientInformation>
            )
        }
        <ContainerPatientInformation>
          <Picker
            name="doencas"
            items={disease}
            label="Doenças Adulto"
            multiples
            onChangeSelected={(value) => setSelectedDisease(value)}
          />
        </ContainerPatientInformation>
        <ContainerPatientInformation>
          <Input
            name="historico"
            label="Histórico da Moléstia"
            placeholder="Digite..."
            multiline
          />
        </ContainerPatientInformation>
        <Button
          text="Salvar"
          asButton={AddMedicalRecordButton}
          onPress={() => formRef.current?.submitForm()}
        />
      </Form>
    </Container>
  )
}

export default RegisterMedicalRecord
