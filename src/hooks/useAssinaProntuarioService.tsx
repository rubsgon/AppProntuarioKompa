import { useState, useEffect } from 'react'

import service from '../services/assinaProntuarioService'

const getServiceStatus = () => () => service.get('/')
const getComplaint = () => async () => service.get('/queixas')
const getDisease = () => async () => service.get('/doencas')
const setMedicalRecord = () => async (data: object) => service.post('/prontuario', data)

const useAssinaProntuarioService = () => ({
  getServiceStatus: getServiceStatus(),
  getComplaint: getComplaint(),
  getDisease: getDisease(),
  setMedicalRecord: setMedicalRecord(),
})

export default useAssinaProntuarioService
