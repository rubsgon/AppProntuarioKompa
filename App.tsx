import React, { FC } from 'react'
import 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components'

import Routes from './src/Routes'
import mainTheme from './src/styles/mainTheme'
import { Container } from './src/styles'
import MedicalRecordsProvider from './src/contexts/MedicalRecordsContext'

const App: FC = () => (
  <ThemeProvider theme={mainTheme}>
    <Container>
      <MedicalRecordsProvider>
        <Routes />
      </MedicalRecordsProvider>
    </Container>
  </ThemeProvider>
)

export default App
