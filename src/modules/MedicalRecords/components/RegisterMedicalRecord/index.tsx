import React, {
  FC, useRef, useState, useContext,
} from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'

import Picker from '../../../../components/Form/Picker'
import Button from '../../../../components/Button'
import Input from '../../../../components/Form/Input'
import PatientInformation from '../../../../components/MedicalRecords/PatientInformation'
import SelectedDisease from '../../../../components/MedicalRecords/SelectedDisease'
import Title from '../../../../components/MedicalRecords/Title'
import {
  Container,
  ContainerPatientInformation,
  AddMedicalRecordButton,
} from './styles'
import useFormValidation from '../../../../hooks/useFormValidation'
import { MedicalRecordsContext } from '../../../../contexts/MedicalRecordsContext'

interface FormData {
    queixas: string
}

const RegisterMedicalRecord: FC = () => {
  const [disease, setDisease] = useState([])
  const formRef = useRef<FormHandles>()
  const { validate } = useFormValidation(formRef)
  const { setMedicalRecords } = useContext(MedicalRecordsContext)
  const { navigate } = useNavigation()

  const schema = Yup.object().shape({
    queixas: Yup.object()
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

    if (hasValidate) {
      setMedicalRecords(dataWithDate)
      navigate('Home')
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Title>
          Anamnese
        </Title>
        <ContainerPatientInformation>
          <Picker
            name="queixas"
            items={[{ value: 1, label: 'dor de cabeça' }]}
            label="Queixa Principal"
          />
        </ContainerPatientInformation>
        {
            disease.length !== 0
            && (
            <ContainerPatientInformation>
              <PatientInformation title>Selecionados:</PatientInformation>
              <SelectedDisease
                data={disease}
                onClose={(item) => formRef.current?.setFieldValue('doencas', disease.filter((i) => i !== item))}
              />
            </ContainerPatientInformation>
            )
        }
        <ContainerPatientInformation>
          <Picker
            name="doencas"
            items={[{ value: 1, label: 'diabetes' }, { value: 2, label: 'cancer' }]}
            label="Doenças Adulto"
            multiples
            onChangeSelected={(value) => setDisease(value)}
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
