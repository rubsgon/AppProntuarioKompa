import React, { useEffect, useRef, useState } from 'react'
import Picker, { PickerSelectProps } from 'react-native-picker-select'
import { useField } from '@unform/core'

import PatientInformation from '../../MedicalRecords/PatientInformation'
import { pickerStyle, Container, Icon } from './styles'
import { TextError } from '../TextError'

interface Props extends Omit<PickerSelectProps, 'onValueChange'> {
  name: string,
  items: object[],
  label: string,
  multiples?: boolean,
  onChangeSelected?: Function
}

export default function RNPickerSelect({
  name, items, label, multiples, onChangeSelected, ...rest
}: Props) {
  const pickerRef = useRef(null)
  const {
    fieldName, registerField, defaultValue = null, error, clearError,
  } = useField(name)

  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const [selectedValues, setSelectedValues] = useState([])

  const handleSelectedValue = (value) => {
    setSelectedValue(value)
    clearError()

    let newArray = selectedValues

    if (value && multiples && selectedValues.filter((i) => i.value === value).length === 0) {
      newArray = [...newArray, items[value - 1]]
      setSelectedValues(newArray)
    }

    if (onChangeSelected) onChangeSelected(multiples ? newArray : items[value - 1])
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: pickerRef.current,
      getValue: (ref) => {
        if (multiples) return selectedValues || []
        return items[selectedValue - 1] || null
      },
      clearValue: (ref) => {
        ref.props.onValueChange(0)
        setSelectedValues([])
        setSelectedValue(0)
      },
      setValue: (_, value: any) => {
        if (multiples) setSelectedValues(value)
        else setSelectedValue(value)

        if (onChangeSelected) onChangeSelected(value)
      },
    })

    if (multiples) setSelectedValue(null)
  }, [fieldName, registerField, selectedValues, selectedValue, multiples, items, onChangeSelected])

  return (
    <Container>
      <PatientInformation title>{label}</PatientInformation>
      <Picker
        Icon={() => <Icon name="chevron-down" size={12} />}
        ref={pickerRef}
        value={selectedValue}
        onValueChange={handleSelectedValue}
        items={items}
        useNativeAndroidPickerStyle={false}
        placeholder={{
          label: 'Selecione...',
          value: null,
        }}
        style={pickerStyle(error)}
        {...rest}
      />
      { error && <TextError>{error}</TextError> }
    </Container>
  )
}
