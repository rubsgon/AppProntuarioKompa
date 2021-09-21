import axios from 'axios'

const assinaProntuarioService = axios.create({
  baseURL: 'https://assina-prontuario.herokuapp.com',
})

export default assinaProntuarioService
