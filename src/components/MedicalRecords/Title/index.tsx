import React, { FC } from 'react'

import { Container, Text } from './styles'

const Title: FC = ({ children }) => (
  <Container>
    <Text>{children}</Text>
  </Container>
)

export default Title
