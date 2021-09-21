import React, {
  createContext, FC, useState, useEffect,
} from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

interface IMedicalRecordsContext {
    storage: object,
    setMedicalRecords: (value: object) => void
}

const DEFAULT_VALUES = {
  storage: {},
  setMedicalRecords: () => {},
}

const MedicalRecordsContext = createContext<IMedicalRecordsContext>(DEFAULT_VALUES)

const MedicalRecordsProvider: FC = ({ children }) => {
  const [storage, setStorage] = useState([])
  const { setItem, getItem } = useAsyncStorage('@MedicalRecords')

  const reydrate = async () => {
    const jsonString = await getItem()

    const jsonValue = jsonString != null ? JSON.parse(jsonString) : []

    console.log('reydrate', jsonValue)

    setStorage(jsonValue)

    return jsonValue
  }

  useEffect(() => {
    reydrate()
  }, [])

  const setMedicalRecords = async (value: object) => {
    const jsonValue = JSON.stringify([...storage, value])
    setItem(jsonValue)
    await reydrate()
  }

  return (
    <MedicalRecordsContext.Provider value={{ storage, setMedicalRecords }}>
      { children }
    </MedicalRecordsContext.Provider>
  )
}

export { MedicalRecordsContext }
export default MedicalRecordsProvider
