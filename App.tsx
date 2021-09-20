import React, { FC } from 'react'
import 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components'

import Routes from './src/Routes'
import mainTheme from './src/styles/mainTheme'
import { Container } from './src/styles'

const App: FC = () => (
  <ThemeProvider theme={mainTheme}>
    <Container>
      <Routes />
    </Container>
  </ThemeProvider>

)

export default App
