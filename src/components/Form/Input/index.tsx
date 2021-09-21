import React, {
  useRef, useEffect, useCallback, FC,
} from 'react'
import { useField } from '@unform/core'

import PatientInformation from '../../MedicalRecords/PatientInformation'
import { Container, TextInput } from './styles'
import { TextError } from '../TextError'

interface Props {
  name: string,
  label?: string,
  onChangeText?: (value: string) => string,
  multiline?: boolean
}

const Input: FC<Props> = ({
  name, label, onChangeText, multiline, ...rest
}) => {
  const inputRef = useRef(null)

  const {
    fieldName, registerField, defaultValue, error, clearError,
  } = useField(name)

  useEffect(() => {
    inputRef.current.value = defaultValue
  }, [defaultValue])

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue
  }, [defaultValue])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value

        return ''
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value })
          inputRef.current.value = value
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' })
          inputRef.current.value = ''
        }
      },
    })
  }, [fieldName, registerField])

  const handleChangeText = useCallback(
    (text) => {
      clearError()
      if (inputRef.current) inputRef.current.value = text

      if (onChangeText) onChangeText(text)
    },
    [clearError, onChangeText],
  )

  return (
    <Container>
      <PatientInformation title>{label}</PatientInformation>
      <TextInput
        error={error}
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        multiline={multiline}
        {...rest}
      />
      { error && <TextError>{error}</TextError> }
    </Container>
  )
}

export default Input
